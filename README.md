# My Cube Algs

スピードキューブ(3x3x3)の OLL / PLL / F2L 手順を JSON で管理し、cubing.js の `<twisty-player>` で再生確認できる静的サイト。

**Live:** https://arai-ryusuke.github.io/my-cube-algs/

## 概要

- データは `data/<category>/<id>.json` の直編集で追加・更新
- ビルドは GitHub Actions、`main` への push で自動デプロイ

仕様の詳細は [`docs/project-brief.md`](docs/project-brief.md) を参照。

## 構成

```
data/
  oll/    OLL ケース (JSON 1 ファイル = 1 ケース)
  pll/    PLL ケース
  f2l/    F2L ケース
src/
  components/CubePlayer.astro   twisty-player ラッパー (z2 を自動付与)
  layouts/Layout.astro          共通ヘッダ + cubing.js CDN script
  lib/cases.ts                  import.meta.glob でデータ自動収集
  pages/
    index.astro                 ランディング
    [category]/index.astro      カテゴリ一覧
    [category]/[id].astro       個別ケース詳細
```

## 開発

```bash
pnpm install
pnpm dev      # http://localhost:4321/my-cube-algs/
pnpm build    # 静的ファイルを dist/ に出力
```

Node 23 系では `pnpm@9` を使う(`pnpm@10+` は `node:sqlite` を要求するため起動不可)。

## ケース追加

1. `data/<category>/<id>.json` を作成(スキーマは既存ファイル参照)
2. `setup` は省略すると primary の逆手順が自動で入る(明示したい場合のみ書く)
3. `pnpm dev` で見た目確認 → コミット → push で自動デプロイ
