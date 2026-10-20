import sys
import os
import json
import base64
import subprocess
import zipfile
import shutil

TOKEN = os.environ.get('GITHUB_TOKEN', '')
if not TOKEN and os.path.exists('.github_token'):
    with open('.github_token') as tf:
        TOKEN = tf.read().strip()
REPO_USER = 'ykash16112002-ux'
REPO_NAME = 'aluprime'
AUTH_REPO_URL = f'https://{REPO_USER}:{TOKEN}@github.com/{REPO_USER}/{REPO_NAME}.git'
SAFE_REPO_URL = f'https://github.com/{REPO_USER}/{REPO_NAME}.git'

def save_and_deploy(data_url):
    print("1. Parsing data URL...")
    if not data_url or not data_url.startswith("data:"):
        print("Invalid data URL")
        return False

    header, encoded = data_url.split(",", 1)
    img_bytes = base64.b64decode(encoded)

    # 1. Save binary file to public and dist
    os.makedirs('public', exist_ok=True)
    os.makedirs('dist', exist_ok=True)
    with open('public/hero-image.jpg', 'wb') as f:
        f.write(img_bytes)
    with open('dist/hero-image.jpg', 'wb') as f:
        f.write(img_bytes)
    print("Saved public/hero-image.jpg and dist/hero-image.jpg")

    # 2. Update src/data/heroImage.ts
    with open('src/data/heroImage.ts', 'w', encoding='utf-8') as f:
        f.write(f'// Embedded permanent hero image asset for Aluprime\n')
        f.write(f'export const defaultHeroImage: string | null = {json.dumps(data_url)};\n')
    print("Updated src/data/heroImage.ts")

    # 3. Build project
    print("3. Building project...")
    p_build = subprocess.run('npm run build', shell=True, capture_output=True, text=True)
    if p_build.returncode != 0:
        print("Build failed:", p_build.stderr)
        return False

    # 4. Refresh zip in public & dist
    zf_path = 'dist/aluprime-site.zip'
    with zipfile.ZipFile(zf_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk('dist'):
            for f in files:
                if f.endswith('.zip'):
                    continue
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, 'dist')
                zf.write(full_path, rel_path)
    shutil.copy('dist/aluprime-site.zip', 'public/aluprime-site.zip')
    print("Updated zip archive")

    # 5. Git commit & push main
    print("5. Committing and pushing main...")
    subprocess.run('git add -A', shell=True)
    subprocess.run('git commit -m "Update hero background photo"', shell=True)
    p_push_main = subprocess.run(f'git push {AUTH_REPO_URL} main:main', shell=True, capture_output=True, text=True)
    print("Main push result:", p_push_main.returncode, p_push_main.stdout, p_push_main.stderr)

    # 6. Push to gh-pages branch from dist
    print("6. Pushing dist to gh-pages...")
    dist_git_cmds = f"""
    cd dist
    rm -rf .git
    git init
    git config user.name "ykash16112002-ux"
    git config user.email "ykash16112002@gmail.com"
    git branch -M gh-pages
    git add -A
    git commit -m "Deploy live site with new hero photo"
    git push -f {AUTH_REPO_URL} gh-pages:gh-pages
    rm -rf .git
    """
    p_push_gh = subprocess.run(dist_git_cmds, shell=True, capture_output=True, text=True)
    print("gh-pages push result:", p_push_gh.returncode, p_push_gh.stdout, p_push_gh.stderr)

    # 7. Safe cleanup
    subprocess.run(f'git remote set-url origin {SAFE_REPO_URL}', shell=True)
    print("Complete!")
    return True

if __name__ == '__main__':
    if len(sys.argv) > 1 and os.path.exists(sys.argv[1]):
        with open(sys.argv[1], 'r', encoding='utf-8') as f:
            content = f.read().strip()
            # might be JSON or raw string
            try:
                data = json.loads(content)
                data_url = data.get('dataUrl', content)
            except:
                data_url = content
            save_and_deploy(data_url)
    else:
        print("Usage: python3 scripts/save_and_deploy_hero.py <path_to_json_or_dataurl>")
