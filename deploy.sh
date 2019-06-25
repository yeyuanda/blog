#!/usr/bin/env sh

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/yeyuanda/blog.git master

# throw error
set -e

# build static
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:yeyuanda/yeyuanda.github.io.git master
git push -f https://github.com/yeyuanda/yeyuanda.github.io.git master

cd -

rm -rf .vuepress/dist
