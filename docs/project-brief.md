# Speedcube Algorithm Repository

## 目的
自分のスピードキューブ手順(OLL/PLL/F2L)をGitで管理し、
GitHub Pagesでバーチャルキューブによる手順再生を可能にする静的サイトを構築する。

## 技術スタック
- 静的サイトジェネレーター: Astro (またはVitePress)
- 3Dキューブ表示: cubing.js の `<twisty-player>` Webコンポーネント
- ホスティング: GitHub Pages
- CI/CD: GitHub Actions
- データ形式: JSON (手順) + Markdown (解説)

## ディレクトリ構成
```
data/
  oll/
    oll-01.json
    oll-02.json
    ...
  pll/
    pll-aa.json
    ...
  f2l/
    f2l-01.json
    ...
src/
  pages/
    index.astro
    oll/[id].astro
    pll/[id].astro
    f2l/[id].astro
  components/
    CubePlayer.astro    # twisty-player のラッパー
    AlgorithmCard.astro
```

## データスキーマ

各ケース1ファイル。同じケースに複数手順を持てる構造にする。

```json
{
  "id": "oll-21",
  "category": "oll",
  "name": "OLL 21 (H / Double Sune)",
  "setup": "R U2 R' U' R U R' U' R U' R'",
  "algorithms": [
    {
      "id": "primary",
      "notation": "R U R' U R U' R' U R U2 R'",
      "comment": "現在のメイン手順",
      "fingertricks": "右手中心",
      "learned_at": "2025-04-01",
      "is_primary": true
    },
    {
      "id": "alt-1",
      "notation": "F R U R' U' R U R' U' R U R' U' F'",
      "comment": "練習中の別解",
      "is_primary": false
    }
  ],
  "tags": ["oll", "oriented-corners"],
  "notes": "認識ポイント: トップ面のエッジが十字、コーナーが特定パターン"
}
```

### 逆手順(setup)について
`setup` フィールドは「完成状態からこのケースを作るための手順」。
これを再生することで、対象のケース状態のキューブを作れる。
通常は `algorithms[0].notation` の逆順(各手を逆向きに、順序も逆に)を保存するが、
より自然なセットアップが存在する場合は手動で記述してもよい。

## 機能要件

### Phase 1: データとビルド基盤
- [ ] Astroプロジェクトの初期化
- [ ] JSONスキーマの確定とサンプルデータ作成(各カテゴリ3件ずつ)
- [ ] cubing.js の組み込み(CDN経由 or npm)
- [ ] GitHub Actions による Pages デプロイ

### Phase 2: 基本表示
- [ ] カテゴリ別の一覧ページ(OLL/PLL/F2L)
- [ ] 個別ケースページ
  - setupを実行してケース状態を作る
  - primary手順を再生
  - 複数手順がある場合はタブまたは並列で切り替え可能に
- [ ] 再生コントロール(再生/一時停止/速度/逆再生)

## 制約・方針
- データ追加・編集はJSONファイル直編集で完結すること(管理UIは作らない)
- ビルドはGitHub Actionsで自動化、mainブランチへのpushで本番反映
- 外部APIには依存しない(完全静的)
- cubing.js は `https://cdn.cubing.net/v0/js/cubing/twisty` から読み込み

## 参考リンク
- cubing.js: https://js.cubing.net/cubing/twisty/
- twisty-player リファレンス: https://js.cubing.net/cubing/api/classes/twisty.TwistyPlayer.html