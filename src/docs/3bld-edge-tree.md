# UFバッファ 3-style エッジ手順ツリー(全440手順)

> **注意**: この文書はAIが下記2記事を解析・再構成してまとめたものです。転記ミスや分類の解釈違いを含む可能性があり、内容の正確性は保証しません。正確な手順・解説は必ず原典をご参照ください。

出典(本文では以下の略称で参照):
1. **カタログ記事** — 悪牛さん「UFエッジ3-style全440手順」(note, Speedcubing Advent Calendar 2025 1日目)。UFバッファのエッジ3-style全440手順を、実戦採用手順+所見つきで網羅したもの。
   https://note.com/arinortobax/n/na7db27bb2dd6
2. **入門記事** — cubyyさん「UFバッファ3style入門」(About BLD, 2020/3/15加筆版)。「組み合わせ → 系統」の判定ルールを9カテゴリで体系化したもの。
   http://cubyy.blog.fc2.com/blog-entry-8.html

カタログ記事の手順リストを「1枚目のターゲット → 分類 → 2枚目のターゲット」の木構造に並べ替え、入門記事の判定体系をルールツリーと対応表として統合した個人用メモ。

2つのビューの使い分け:
- **判定ルールツリー(入門記事)** = 「この組み合わせならこの系統」をルールから導く学習用ビュー(記事内でも「分かりやすさ優先、速くない手順も一部含む」と明言)
- **分類ツリー/フル手順ツリー(カタログ記事)** = 実戦最適化された採用手順の実態(速さ・指使い優先でルールから逸脱する)
- **付録C** = 両者の対応表。一致している所は「原理で導ける場所」、ズレている所は「最適化で乗り換えられている場所」

## 前提

- バッファ: **UF**
- ステッカー表記: 1文字目 = ステッカーが貼られている面。例: `RD` = DRエッジのR面ステッカー、`DR` = 同じエッジのD面ステッカー
- 逆サイクル(UF-Y-X)は逆手順を回せばよい(入門記事は片方向のみ記載。カタログ記事は両方向とも掲載で、ときどき別系統の手順を採用)
- コミュテータ表記(カタログ記事はElliott手順表READMEの記法):
  - `[A, B]` = A B A' B'
  - `[X: A, B]` = X (A B A' B') X' (セットアップ)
  - `[A/B]` = A B A2 B' A (例: `[R2: U'/S']` = R2 U' S' U2 S U' R2 ← 例の爆速U-perm)
  - 記事注記: `Rw` と `r` は同じ意味
- カタログ記事の分類の分布: M列4-mover 18 / S列4-mover 52 / E列4-mover 87 / M列インターチェンジ 70 / U列インターチェンジ 88 / E列インターチェンジ 26 / S列インターチェンジ 50 / F列インターチェンジ 16 / R/L列インターチェンジ 8 / 暗記手順 25 (計440)

## 分類の原理(ざっくり)

コミュテータ = **インターチェンジ**(ある層の1手回転で、関係する2枚を行き来させる) × **インサート**(残り1枚を、その層の他のピースを壊さずに2スロットのどちらかへ3手前後で出し入れ)。±セットアップ。

1. **バッファUFは U面・M列・F列 の3層に属する。** バッファのステッカーを1手で送れる相手はこの9枚だけ:
   - U列: UR (U') / UL (U) / UB (U2)
   - M列: FD (M) / BU (M') / DB (M2)
   - F列: RF (F) / LF (F') / DF (F2)
   - → 1枚目か2枚目がこの9枚なら「バッファ↔そのステッカー」をインターチェンジにして、残り1枚をインサートする筋がまず候補になる。
2. **ターゲット2枚が同じ層に居るなら、その層でインターチェンジ**して、バッファ側をインサートする筋もある:
   - E層同士 → E列 / S層同士 → S列 / R層・L層同士 → R/L列
   - (D面同士のD列インターチェンジは原理上あるが、両記事とも不採用)
3. **3枚がスライスの交差にきれいに乗る場合**は4手系(4-mover)が最短: M列 (`[U2, M']`系・`[U/M]`系) / S列 (`[S, R2]`系・`[R/S]`系・`[U'/S']`系) / E列 (`[R/E]`系)。1〜2手セットアップして帰着させるものも多い。
4. どれも綺麗にハマらない・指使いが悪いペアは**暗記手順**(8〜11手)。
5. 同じペアでも複数の筋が成立することが多く、最終的な選択は好み。カタログ手順の**鏡像非対称37組**(付録B)と、**判定ルールとの相違144方向**(付録C)がその自由度の現れ。

## 判定ルールツリー(入門記事の体系)

組み合わせ → 系統をルールで導くための木。◆番号は入門記事の章番号。

```
UFバッファ 3-style 判定ルール(入門記事の体系)
│ ※逆サイクルは逆手順を回す(記事は片方向のみ記載)。左右対称も同様
├─ ◆1 U面インターチェンジ
│  ├─ (1) UF-[U面(UR/UL/UB)]-[RU/LUを除くR面・L面ステッカー] → すべてU面IC
│  │     基本インサート: LF=R' E R→UR / LB=R E' R'→UR / RD=R' E' R→UR(R E R'も可)
│  │                  RF=L E' L'→UL / RB=L' E L→UL / LD=L E L'→UL
│  │     直接入らない組合せはU面でセットアップ
│  │     例: UF-UR-LF [U', R' E R] / UF-UL-LF [U': R' E R, U'] / UF-UB-RD [U': R' E' R, U2]
│  ├─ (1-1) UF-[LU|RD]-[LF|LB]: LUはS、RDはS'でURへセットアップ → (1)
│  ├─ (1-2) UF-[RU|LD]-[RF|RB]: RUはS'、LDはSでULへセットアップ → (1)
│  └─ (1-3) UF-UL-[FR|BR]: FR=L' E2 L、BR=L E2 L'でULへインサート(UR-[FL|BL]は左右対称)
├─ ◆2 M列インターチェンジ
│  ├─ (1) UF-[FD|DB|BU]-[R列(UR/FR/DR/BR)|L列(UL/FL/DL/BL)] → すべてM列IC(R/L列ステッカーをバッファへインサート)
│  │     例: UF-FD-FR [U' R U, M'] / UF-BU-UR [R': U' R U, M](R'セットアップだと2層回しキャンセル)
│  ├─ (1-1) UF-[LD|RD]-[FR|BR|FL|BL]: LDはD、RDはD'でFDへセットアップ → (1)
│  ├─ (2) UF-BD-[R列|L列(UR/UL除く)]: U2セットアップ、R/L列ステッカーをUBへインサート
│  ├─ (3) UF-BU-[R面(RU/RF/RD/RB)|L面]: R/L面ステッカーをBUへインサート
│  ├─ (3-1) UF-DB-[R面|L面]: M/M'セットアップ → (3) ※RU/LUはD/D'で◆4(1)に持ち込む方が良いかも
│  └─ (3-2) UF-FD-[R面|L面]: M'/M2セットアップ → (3) ※RD/LDは◆4(4)の方が速い
├─ ◆3 E列インターチェンジ
│  ├─ (1) UF-FR-[LF|RB]など(E/E'で隣り合う組合せ): R U' R'でUFをFRへインサートし、E/E'でIC
│  │     インサート: FR=R U' R' / BR=R' U' R / FL=L' U L / BL=L U L'
│  │     ※E2が必要な組合せ(UF-FR-BL等)は◆7(E列4手系)へ
│  └─ (2) UF-FR-LB、UF-BR-LFなど: R2セットアップ → (1)(キャンセルが起きる)
├─ ◆4 S列インターチェンジ
│  ├─ (1) UF-RU-[UL|DR]、UF-LU-[UR|DL]: R' F RでUFをRUへインサートし、S/S'でIC
│  ├─ (1-1) UF-RU-[FL|BL]、UF-LU-[FR|BR]: L'/Lで(1)へセットアップ
│  ├─ (2) UF-RD-DL、UF-LD-DR: R F R'でUF→RD、L' F' LでUF→LD
│  ├─ (2-1) UF-DF-BD、UF-FD-DB: D/D'で(2)へセットアップ
│  ├─ (3) UF-BU-[DF|FD]: U/U'セットアップ、R' F' Rインサート、SでIC ※DFとFDでサイクル判断に注意
│  ├─ (3') UF-BU-[DB|BD]: U/U'セットアップ、R B R'インサート、SでIC
│  ├─ (4) UF-FD-[RD|LD]: U'セットアップで[R' F' R, S'](LDは左右対称)
│  └─ (4') UF-BD-[RD|LD]: U'セットアップ、R B R'インサート、S'でIC(LDは左右対称)
├─ ◆5 R/L面インターチェンジ
│  ├─ (1) UF-UR-[FR|BR]: M U M' U'でUFをURへセットアップ
│  ├─ (1-1) UF-UL-[FL|BL]: (1)の左右対称
│  ├─ (1-2) UF-DR-[FR|BR]: R/R'で(1)へセットアップ(キャンセルあり)。DL-[FL|BL]も同様
│  ├─ (2) UF-RD-[RF|RB]: U' S UでUFをRDへセットアップ
│  └─ (2-1) UF-LD-[LF|LB]: (2)の左右対称
│     ※UF-UR-DRやUF-FR-BRはS列(◆8)の方が回しやすい手順があるのでそちらを採用
├─ ◆6 M列4手系(M' U2 M U2形)
│  ├─ (1) UF-UB-[DF|DB]: DF=U2 M' U2 M、DB=M U2 M' U2(最も基本)
│  ├─ (1-1) UF-DF-DB: Uw2 M' Uw2 M'(M2で(1)へセットアップでも可)
│  ├─ (2) U面に3パーツ(UF-UL-UR、UF-UB-ULなど): セットアップ → Uperm(便宜上ここに分類)
│  ├─ (3) UF-LU-RU: M U M' U2 M U M'(M Uで4手コミュテータにセットアップ)
│  ├─ (3-1) UF-LU-[RF|RB]はR/R'、UF-RU-[LF|LB]はL'/Lで(3)へ
│  ├─ (3-2) UF-UB-[RU|LU]: U/U'で(3)へ(バッファの位置関係が少し違うので注意)
│  ├─ (3-3) UF-RU-[BR|FR]: U→R'/Rで(3)の位置関係へ。UF-LU-[BL|FL]は左右対称(BR/BLは2層同時回しが効く)
│  ├─ (4) UF-UB-[FD|BD]: FD=[U' M: U M U2 M' U]、BD=[U M': U M' U2 M U]
│  └─ (5) UF-DF-[FL|FR|BL|BR]: FL=[U' L': U M' U2 M U]、BL=[U' L: U M' U2 M U](FR/BRは左右対称)
├─ ◆7 E列4手系
│  ├─ (1) UF-DF-[R面|L面]: R面はRBへセットアップして[F: E, R2]、L面はLBへセットアップして[F': E', L2]
│  ├─ (2) UF-DR-[FL|BL]: U'セットアップ、FL=R E R2' E' R、BL=R' E' R2 E R'(UF-DL-[FR|BR]は左右対称)
│  ├─ (2-1) UF-FL-[FR|BR]はR'、UF-BL-[FR|BR]はRで(2)へセットアップ
│  ├─ (2-2) UF-[LF|LB|RF|RB]-[DL|DR]: U・E同時回しで(2)へセットアップ(DL=U+E/E'、DR=U'+E'/E)
│  └─ (3) UF-LB-RF: Lw' U'→L' E' L2 E L'(UF-RB-LFは左右対称)
├─ ◆8 S列4手系
│  ├─ (1) UF-UB-[DR|DL]: DR=[U': S R2' S' R2]、DL=[U: S' L2 S L2']
│  ├─ (1-1) UF-UB-[FR|BR]: R'/Rで(1)へ
│  ├─ (1-2) UF-UB-[FL|BL]: L/L'で(1)へ
│  ├─ (2) UF-DR-DL: [U': S' R2' S R2](Sの向きが(1)と逆)
│  ├─ (3) UF-FR-BR=[U: R' S R2 S' R']、UF-FL-BL=[U': L S' L2' S L]
│  ├─ (3-1) UF-UR-DRはR'、UF-UL-DLはLで(3)へ(逆サイクルはセットアップをR/L'にする手も)
│  ├─ (3-2) UF-RF-RBはLw' U'、UF-LF-LBはRw Uで(3)へ
│  ├─ (3-3) UF-RF-LFはU E、UF-RB-LBはU E'(=Uw)で(3)のFR-BRへ
│  ├─ (4) UF-RD-LU=[R' F: R' S R2 S' R']、UF-LD-RU=左右対称(L F'セットアップ)
│  ├─ (4-1) UF-LD-RD: R' Fセットアップ→R' S' R2 S R'(Sの向きが(4)と逆)
│  └─ (5) UF-RD-RU=[Rw' D': R' S' R2 S R']、UF-LU-LD=[Lw D: L S L2' S' L](最悪S'/SでUpermにセットアップでも可)
└─ ◆9 その他
   ├─ (1-1) UF-DF-[UL|UR]: UL=[U', M U2 M](特殊インサート。M' D2 Mでも可だがD面を使わない方が早い)、URはインターチェンジをUに
   ├─ (1-2) UF-DF-[DL|DR]: DL=[M' U2 M, D]、DRはインターチェンジがD'
   ├─ (2-1) UF-BD-[UR|UL]: UR=M U' M' U' M U' M' U'、UL=M U M' U M U M' U(UとMの順・U/U'の判断が難所)
   ├─ (2-2) UF-BD-[LU|RU]: M'セットアップで(2-1)の前後逆。LU=[M': M' U' M U' M' U' M U']、RUは左右対称
   ├─ (2-2') UF-BD-[LF|LB|RF|RB]: L面はLU、R面はRUへセットアップ → (2-2)
   ├─ (3) UF-RU-DL=[R': F, R' S' R]、UF-LU-DR=左右対称(x持ち替えで回しやすい)
   └─ (4) UF-UL-DR=U R U R' U' R' U' R' U R、UF-UR-DL=左右対称(R2/L2→Upermでも可。余談: [S: R U R' U' R' U' R' U R]=OLL20)
```

判定ルールのカバレッジ(検証済み): 全220ペア中219をカバー。唯一の空白は **FD・BD**(カタログ記事は暗記手順 [U M' U' M U2 M U M' U])。重複は FD×RD/LD のみで、入門記事内で「◆4(4)の方が速い」と明言(◆2(3-2)は代替)。

## 分類ツリー(カタログ記事の採用手順ベース)

どの組み合わせがどの分類の手順で解かれているかの一覧。

```
UF(バッファ)
├─ UB(UBエッジU面)が1枚目
│  ├─ 2枚目が DF/DB → M列4-mover
│  ├─ 2枚目が UR/RU/UL/LU/DR/DL/BD/FR/FL/BR/BL → S列4-mover
│  ├─ 2枚目が RD/LD/RF/LF/RB/LB → U列インターチェンジ
│  └─ 2枚目が FD → E列インターチェンジ
├─ BU(UBエッジB面)が1枚目
│  ├─ 2枚目が UR/RU/LU/DR/RD/LD/FR/RF/FL/LF/BR/RB/BL/LB → M列インターチェンジ
│  └─ 2枚目が UL/DF/FD/DL/DB/BD → S列インターチェンジ
├─ UR(URエッジU面)が1枚目
│  ├─ 2枚目が UL → M列4-mover
│  ├─ 2枚目が UB/DL → S列4-mover
│  ├─ 2枚目が BU/FD/DB → M列インターチェンジ
│  ├─ 2枚目が DR/RD/LD/FR/RF/FL/LF/BR/RB/BL/LB → U列インターチェンジ
│  ├─ 2枚目が LU → S列インターチェンジ
│  └─ 2枚目が DF/BD → 暗記手順
├─ RU(URエッジR面)が1枚目
│  ├─ 2枚目が LU/LB → M列4-mover
│  ├─ 2枚目が UB/LD → S列4-mover
│  ├─ 2枚目が DF/RD/FR/FL/BR/BL → E列4-mover
│  ├─ 2枚目が BU/DB → M列インターチェンジ
│  ├─ 2枚目が RF/RB → U列インターチェンジ
│  ├─ 2枚目が FD/LF → E列インターチェンジ
│  ├─ 2枚目が UL/DR → S列インターチェンジ
│  ├─ 2枚目が DL → F列インターチェンジ
│  └─ 2枚目が BD → 暗記手順
├─ UL(ULエッジU面)が1枚目
│  ├─ 2枚目が UR → M列4-mover
│  ├─ 2枚目が UB → S列4-mover
│  ├─ 2枚目が FD → M列インターチェンジ
│  ├─ 2枚目が RD/DL/LD/FR/RF/FL/LF/BR/RB/BL/LB → U列インターチェンジ
│  ├─ 2枚目が BU/RU → S列インターチェンジ
│  ├─ 2枚目が DF → F列インターチェンジ
│  └─ 2枚目が DR/DB/BD → 暗記手順
├─ LU(ULエッジL面)が1枚目
│  ├─ 2枚目が RU/RF/RB/BL → M列4-mover
│  ├─ 2枚目が UB/RD/LD → S列4-mover
│  ├─ 2枚目が DF/FR/BR → E列4-mover
│  ├─ 2枚目が BU → M列インターチェンジ
│  ├─ 2枚目が FL/LF/LB → U列インターチェンジ
│  ├─ 2枚目が UR/FD/DL/DB → S列インターチェンジ
│  ├─ 2枚目が DR → F列インターチェンジ
│  └─ 2枚目が BD → 暗記手順
├─ DF(DFエッジD面)が1枚目
│  ├─ 2枚目が UB/DB → M列4-mover
│  ├─ 2枚目が FR/BR → S列4-mover
│  ├─ 2枚目が RU/LU/RD/LD/RF/FL/RB/BL/LB → E列4-mover
│  ├─ 2枚目が BU/BD → S列インターチェンジ
│  └─ 2枚目が UR/UL/DR/DL/LF → F列インターチェンジ
├─ FD(DFエッジF面)が1枚目
│  ├─ 2枚目が UR/UL/DR/DL/FR/RF/FL/BR/RB/BL → M列インターチェンジ
│  ├─ 2枚目が LF/LB → U列インターチェンジ
│  ├─ 2枚目が UB/RU → E列インターチェンジ
│  ├─ 2枚目が BU/LU/RD/LD/DB → S列インターチェンジ
│  └─ 2枚目が BD → 暗記手順
├─ DR(DRエッジD面)が1枚目
│  ├─ 2枚目が UB/UR/FD/DL → S列4-mover
│  ├─ 2枚目が BD/RF/FL/LF/RB/BL/LB → E列4-mover
│  ├─ 2枚目が BU → M列インターチェンジ
│  ├─ 2枚目が RU/LD → S列インターチェンジ
│  ├─ 2枚目が LU/DF/DB → F列インターチェンジ
│  └─ 2枚目が UL/FR/BR → 暗記手順
├─ RD(DRエッジR面)が1枚目
│  ├─ 2枚目が LU/LD → S列4-mover
│  ├─ 2枚目が RU/DF/FR/BR/LB → E列4-mover
│  ├─ 2枚目が BU → M列インターチェンジ
│  ├─ 2枚目が UB/UR/UL/LF → U列インターチェンジ
│  ├─ 2枚目が BL → E列インターチェンジ
│  ├─ 2枚目が FD/DL/DB/BD/FL → S列インターチェンジ
│  └─ 2枚目が RF/RB → R/L列インターチェンジ
├─ DL(DLエッジD面)が1枚目
│  ├─ 2枚目が UB/UL/FD/DR → S列4-mover
│  ├─ 2枚目が BD/FR/LF/BR/RB/LB → E列4-mover
│  ├─ 2枚目が BU/LU/RD → S列インターチェンジ
│  ├─ 2枚目が RU/DF/RF → F列インターチェンジ
│  └─ 2枚目が UR/DB/FL/BL → 暗記手順
├─ LD(DLエッジL面)が1枚目
│  ├─ 2枚目が RU/LU/RD → S列4-mover
│  ├─ 2枚目が DF/FL/RB/BL → E列4-mover
│  ├─ 2枚目が BU → M列インターチェンジ
│  ├─ 2枚目が UB/UR/UL/RF → U列インターチェンジ
│  ├─ 2枚目が BR → E列インターチェンジ
│  ├─ 2枚目が FD/DR/DB/BD/FR → S列インターチェンジ
│  └─ 2枚目が LF/LB → R/L列インターチェンジ
├─ DB(DBエッジD面)が1枚目
│  ├─ 2枚目が UB/DF → M列4-mover
│  ├─ 2枚目が DR → S列4-mover
│  ├─ 2枚目が FL/BL → E列4-mover
│  ├─ 2枚目が UR/RU/FR/RF/LF/BR/RB/LB → M列インターチェンジ
│  ├─ 2枚目が BU/LU/FD/RD/LD → S列インターチェンジ
│  └─ 2枚目が UL/DL → 暗記手順
├─ BD(DBエッジB面)が1枚目
│  ├─ 2枚目が UB → S列4-mover
│  ├─ 2枚目が DR/DL → E列4-mover
│  ├─ 2枚目が FR/FL/BR/BL → M列インターチェンジ
│  ├─ 2枚目が RF/LF/RB/LB → U列インターチェンジ
│  ├─ 2枚目が BU/RU/LU/DF/RD/LD → S列インターチェンジ
│  └─ 2枚目が UR/UL/FD → 暗記手順
├─ FR(FRエッジF面)が1枚目
│  ├─ 2枚目が UB/BR → S列4-mover
│  ├─ 2枚目が RU/LU/RD/DL/FL/BL → E列4-mover
│  ├─ 2枚目が BU/FD/DB/BD → M列インターチェンジ
│  ├─ 2枚目が UR/UL/LB → U列インターチェンジ
│  ├─ 2枚目が LF/RB → E列インターチェンジ
│  ├─ 2枚目が LD → S列インターチェンジ
│  └─ 2枚目が DF/DR → 暗記手順
├─ RF(FRエッジR面)が1枚目
│  ├─ 2枚目が LU → M列4-mover
│  ├─ 2枚目が LF/RB → S列4-mover
│  ├─ 2枚目が DF/DR/LB → E列4-mover
│  ├─ 2枚目が BU/FD/DB → M列インターチェンジ
│  ├─ 2枚目が UB/UR/RU/UL/LD/BD/BL → U列インターチェンジ
│  ├─ 2枚目が FL/BR → E列インターチェンジ
│  ├─ 2枚目が DL → F列インターチェンジ
│  └─ 2枚目が RD → R/L列インターチェンジ
├─ FL(FLエッジF面)が1枚目
│  ├─ 2枚目が UB/BL → S列4-mover
│  ├─ 2枚目が RU/DF/DR/LD/DB/FR/BR → E列4-mover
│  ├─ 2枚目が BU/FD/BD → M列インターチェンジ
│  ├─ 2枚目が UR/UL/LU/RB → U列インターチェンジ
│  ├─ 2枚目が RF/LB → E列インターチェンジ
│  ├─ 2枚目が RD → S列インターチェンジ
│  └─ 2枚目が DL → 暗記手順
├─ LF(FLエッジL面)が1枚目
│  ├─ 2枚目が RF/LB → S列4-mover
│  ├─ 2枚目が DR/DL/RB → E列4-mover
│  ├─ 2枚目が BU/DB → M列インターチェンジ
│  ├─ 2枚目が UB/UR/UL/LU/FD/RD/BD/BR → U列インターチェンジ
│  ├─ 2枚目が RU/FR/BL → E列インターチェンジ
│  ├─ 2枚目が DF → F列インターチェンジ
│  └─ 2枚目が LD → R/L列インターチェンジ
├─ BR(BRエッジB面)が1枚目
│  ├─ 2枚目が UB/FR → S列4-mover
│  ├─ 2枚目が RU/LU/DF/RD/DL/FL/BL → E列4-mover
│  ├─ 2枚目が BU/FD/DB/BD → M列インターチェンジ
│  ├─ 2枚目が UR/UL/LF → U列インターチェンジ
│  ├─ 2枚目が LD/RF/LB → E列インターチェンジ
│  └─ 2枚目が DR → 暗記手順
├─ RB(BRエッジR面)が1枚目
│  ├─ 2枚目が LU → M列4-mover
│  ├─ 2枚目が RF/LB → S列4-mover
│  ├─ 2枚目が DF/DR/DL/LD/LF → E列4-mover
│  ├─ 2枚目が BU/FD/DB → M列インターチェンジ
│  ├─ 2枚目が UB/UR/RU/UL/BD/FL → U列インターチェンジ
│  ├─ 2枚目が FR/BL → E列インターチェンジ
│  └─ 2枚目が RD → R/L列インターチェンジ
├─ BL(BLエッジB面)が1枚目
│  ├─ 2枚目が LU → M列4-mover
│  ├─ 2枚目が UB/FL → S列4-mover
│  ├─ 2枚目が RU/DF/DR/LD/DB/FR/BR → E列4-mover
│  ├─ 2枚目が BU/FD/BD → M列インターチェンジ
│  ├─ 2枚目が UR/UL/RF → U列インターチェンジ
│  ├─ 2枚目が RD/LF/RB → E列インターチェンジ
│  └─ 2枚目が DL → 暗記手順
└─ LB(BLエッジL面)が1枚目
   ├─ 2枚目が RU → M列4-mover
   ├─ 2枚目が LF/RB → S列4-mover
   ├─ 2枚目が DF/DR/RD/DL/RF → E列4-mover
   ├─ 2枚目が BU/DB → M列インターチェンジ
   ├─ 2枚目が UB/UR/UL/LU/FD/BD/FR → U列インターチェンジ
   ├─ 2枚目が FL/BR → E列インターチェンジ
   └─ 2枚目が LD → R/L列インターチェンジ
```

## フル手順ツリー(全440手順)

```
UF(バッファ)
├─ UB(UBエッジU面)が1枚目
│  ├─ M列4-mover (2手順)
│  │  ├─ UF-UB-DF  [U2, M']
│  │  └─ UF-UB-DB  [M, U2]
│  ├─ S列4-mover (11手順)
│  │  ├─ UF-UB-UR  [R2 U': S, R2]
│  │  ├─ UF-UB-RU  [S U': S, R2]
│  │  ├─ UF-UB-UL  [L2 U': L2, S']
│  │  ├─ UF-UB-LU  [S' U: S', L2]
│  │  ├─ UF-UB-DR  [U': S, R2]
│  │  ├─ UF-UB-DL  [U: S', L2]
│  │  ├─ UF-UB-BD  [U' R' B: R/S]
│  │  ├─ UF-UB-FR  [R' U': S, R2]
│  │  ├─ UF-UB-FL  [L U: S', L2]
│  │  ├─ UF-UB-BR  [R U': S, R2]
│  │  └─ UF-UB-BL  [L' U: S', L2]
│  ├─ U列インターチェンジ (6手順)
│  │  ├─ UF-UB-RD  [U'/R' E' R]
│  │  ├─ UF-UB-LD  [U/L E L']
│  │  ├─ UF-UB-RF  [U/L E' L']
│  │  ├─ UF-UB-LF  [U'/R' E R]
│  │  ├─ UF-UB-RB  [U/L' E L]
│  │  └─ UF-UB-LB  [U'/R E' R']
│  └─ E列インターチェンジ (1手順)
│     └─ UF-UB-FD  [R' F': R U R', E]
├─ BU(UBエッジB面)が1枚目
│  ├─ M列インターチェンジ (14手順)
│  │  ├─ UF-BU-UR  [R' U' R U, M]
│  │  ├─ UF-BU-RU  [M', R U R' U']
│  │  ├─ UF-BU-LU  [M', L' U' L U]
│  │  ├─ UF-BU-DR  [U' R2 U, M]
│  │  ├─ UF-BU-RD  [M', U R2 U']
│  │  ├─ UF-BU-LD  [M', U' L2 U]
│  │  ├─ UF-BU-FR  [U' R U, M]
│  │  ├─ UF-BU-RF  [M', U R U']
│  │  ├─ UF-BU-FL  [U L' U', M]
│  │  ├─ UF-BU-LF  [M', U' L' U]
│  │  ├─ UF-BU-BR  [U' R' U, M]
│  │  ├─ UF-BU-RB  [M', U R' U']
│  │  ├─ UF-BU-BL  [U L U', M]
│  │  └─ UF-BU-LB  [M', U' L U]
│  └─ S列インターチェンジ (6手順)
│     ├─ UF-BU-UL  [U: l F' l', S']
│     ├─ UF-BU-DF  [U: S, R' F' R]
│     ├─ UF-BU-FD  [U': R' F' R, S]
│     ├─ UF-BU-DL  [U D: S, R' F' R]
│     ├─ UF-BU-DB  [U: S, R B R']
│     └─ UF-BU-BD  [U': R B R', S]
├─ UR(URエッジU面)が1枚目
│  ├─ M列4-mover (1手順)
│  │  └─ UF-UR-UL  [M2: U/M]
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-UR-UB  [R2: U'/S']
│  │  └─ UF-UR-DL  [l F: L'/S']
│  ├─ M列インターチェンジ (3手順)
│  │  ├─ UF-UR-BU  [M, R' U' R U]
│  │  ├─ UF-UR-FD  [M', R U' R' U]
│  │  └─ UF-UR-DB  [M2, R U' R' U]
│  ├─ U列インターチェンジ (11手順)
│  │  ├─ UF-UR-DR  [U', R E' R2 E R]
│  │  ├─ UF-UR-RD  [U', R' E' R]
│  │  ├─ UF-UR-LD  [U: L E L', U]
│  │  ├─ UF-UR-FR  [E': U', R' E R]
│  │  ├─ UF-UR-RF  [U: L E' L', U]
│  │  ├─ UF-UR-FL  [U', R E2 R']
│  │  ├─ UF-UR-LF  [U', R' E R]
│  │  ├─ UF-UR-BR  [E: U', R E' R']
│  │  ├─ UF-UR-RB  [U: L' E L, U]
│  │  ├─ UF-UR-BL  [U', R' E2 R]
│  │  └─ UF-UR-LB  [U', R E' R']
│  ├─ S列インターチェンジ (1手順)
│  │  └─ UF-UR-LU  [S', L F' L']
│  └─ 暗記手順 (2手順)
│     ├─ UF-UR-DF  [R2 f2 R2 U' R2 f2 R2 U']
│     └─ UF-UR-BD  [U M U M' U M U M']
├─ RU(URエッジR面)が1枚目
│  ├─ M列4-mover (2手順)
│  │  ├─ UF-RU-LU  [M: U'/M']
│  │  └─ UF-RU-LB  [l: U'/M']
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-RU-UB  [S U': R2, S]
│  │  └─ UF-RU-LD  [L F': L'/S']
│  ├─ E列4-mover (6手順)
│  │  ├─ UF-RU-DF  [R F: R2, E]
│  │  ├─ UF-RU-RD  [R' E R U': R'/E']
│  │  ├─ UF-RU-FR  [R' U' E': R'/E]
│  │  ├─ UF-RU-FL  [S U': R/E]
│  │  ├─ UF-RU-BR  [R u': R/E']
│  │  └─ UF-RU-BL  [S U': R'/E']
│  ├─ M列インターチェンジ (2手順)
│  │  ├─ UF-RU-BU  [R U R' U', M']
│  │  └─ UF-RU-DB  [M/R U R' U']
│  ├─ U列インターチェンジ (2手順)
│  │  ├─ UF-RU-RF  [S': U, L E' L']
│  │  └─ UF-RU-RB  [S': U, L' E L]
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-RU-FD  [R' F': R U' R', E]
│  │  └─ UF-RU-LF  [U' M: U', R' E R]
│  ├─ S列インターチェンジ (2手順)
│  │  ├─ UF-RU-UL  [R' F R, S]
│  │  └─ UF-RU-DR  [R' F R, S']
│  ├─ F列インターチェンジ (1手順)
│  │  └─ UF-RU-DL  [R': F, R' S' R]
│  └─ 暗記手順 (1手順)
│     └─ UF-RU-BD  [M' U' M' U' M U' M' U' M2]
├─ UL(ULエッジU面)が1枚目
│  ├─ M列4-mover (1手順)
│  │  └─ UF-UL-UR  [M2: U'/M]
│  ├─ S列4-mover (1手順)
│  │  └─ UF-UL-UB  [L2 U: L2, S']
│  ├─ M列インターチェンジ (1手順)
│  │  └─ UF-UL-FD  [M', L' U L U']
│  ├─ U列インターチェンジ (11手順)
│  │  ├─ UF-UL-RD  [U': R' E' R, U']
│  │  ├─ UF-UL-DL  [U, L' E L2 E' L']
│  │  ├─ UF-UL-LD  [U, L E L']
│  │  ├─ UF-UL-FR  [U, L' E2 L]
│  │  ├─ UF-UL-RF  [U, L E' L']
│  │  ├─ UF-UL-FL  [E: U, L E' L']
│  │  ├─ UF-UL-LF  [U': R' E R, U']
│  │  ├─ UF-UL-BR  [U, L E2 L']
│  │  ├─ UF-UL-RB  [U, L' E L]
│  │  ├─ UF-UL-BL  [E': U, L' E L]
│  │  └─ UF-UL-LB  [U': R E' R', U']
│  ├─ S列インターチェンジ (2手順)
│  │  ├─ UF-UL-BU  [U: S', l F' l']
│  │  └─ UF-UL-RU  [S, R' F R]
│  ├─ F列インターチェンジ (1手順)
│  │  └─ UF-UL-DF  [R': F'/R S R']
│  └─ 暗記手順 (3手順)
│     ├─ UF-UL-DR  [U R U R' U' R' U' R' U R]
│     ├─ UF-UL-DB  [D' U R U R' U' R' U' R' U R D]
│     └─ UF-UL-BD  [U' M U' M' U' M U' M']
├─ LU(ULエッジL面)が1枚目
│  ├─ M列4-mover (4手順)
│  │  ├─ UF-LU-RU  [M: U/M']
│  │  ├─ UF-LU-RF  [R M: U/M']
│  │  ├─ UF-LU-RB  [r': U/M']
│  │  └─ UF-LU-BL  [U' l: U/M']
│  ├─ S列4-mover (3手順)
│  │  ├─ UF-LU-UB  [S' U: L2, S']
│  │  ├─ UF-LU-RD  [R' F: R/S]
│  │  └─ UF-LU-LD  [S' U': R2, S']
│  ├─ E列4-mover (3手順)
│  │  ├─ UF-LU-DF  [L' F': L2, E']
│  │  ├─ UF-LU-FR  [S' U: L'/E']
│  │  └─ UF-LU-BR  [S' U: L/E]
│  ├─ M列インターチェンジ (1手順)
│  │  └─ UF-LU-BU  [L' U' L U, M']
│  ├─ U列インターチェンジ (3手順)
│  │  ├─ UF-LU-FL  [r U: r' E r, U]
│  │  ├─ UF-LU-LF  [S: U', R' E R]
│  │  └─ UF-LU-LB  [S: U', R E' R']
│  ├─ S列インターチェンジ (4手順)
│  │  ├─ UF-LU-UR  [L F' L', S']
│  │  ├─ UF-LU-FD  [U' D: S', R' F R]
│  │  ├─ UF-LU-DL  [L F' L', S]
│  │  └─ UF-LU-DB  [D: L F' L', S]
│  ├─ F列インターチェンジ (1手順)
│  │  └─ UF-LU-DR  [L: F', L S L']
│  └─ 暗記手順 (1手順)
│     └─ UF-LU-BD  [M' U M' U M U M' U M2]
├─ DF(DFエッジD面)が1枚目
│  ├─ M列4-mover (2手順)
│  │  ├─ UF-DF-UB  [M', U2]
│  │  └─ UF-DF-DB  [u2 M' u2 M']
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-DF-FR  [U R D: S, R2]
│  │  └─ UF-DF-BR  [U R' D: S, R2]
│  ├─ E列4-mover (9手順)
│  │  ├─ UF-DF-RU  [R F: E, R2]
│  │  ├─ UF-DF-LU  [L' F': E', L2]
│  │  ├─ UF-DF-RD  [R' F': R2, E]
│  │  ├─ UF-DF-LD  [L F: L2, E']
│  │  ├─ UF-DF-RF  [R2 F': R2, E]
│  │  ├─ UF-DF-FL  [U' D: R/E]
│  │  ├─ UF-DF-RB  [F': R2, E]
│  │  ├─ UF-DF-BL  [U' D: R'/E']
│  │  └─ UF-DF-LB  [F: L2, E']
│  ├─ S列インターチェンジ (2手順)
│  │  ├─ UF-DF-BU  [U: R' F' R, S]
│  │  └─ UF-DF-BD  [D': S', R F R']
│  └─ F列インターチェンジ (5手順)
│     ├─ UF-DF-UR  [L: F'/L' S' L]
│     ├─ UF-DF-UL  [R': F/R S R']
│     ├─ UF-DF-DR  [R': F/R S' R']
│     ├─ UF-DF-DL  [L: F'/L' S L]
│     └─ UF-DF-LF  [U R' F': R S R', F']
├─ FD(DFエッジF面)が1枚目
│  ├─ M列インターチェンジ (10手順)
│  │  ├─ UF-FD-UR  [R U' R' U, M']
│  │  ├─ UF-FD-UL  [L' U L U', M']
│  │  ├─ UF-FD-DR  [U' R2 U, M']
│  │  ├─ UF-FD-DL  [U L2 U', M']
│  │  ├─ UF-FD-FR  [U' R U, M']
│  │  ├─ UF-FD-RF  [M': U R U', M']
│  │  ├─ UF-FD-FL  [U L' U', M']
│  │  ├─ UF-FD-BR  [U' R' U, M']
│  │  ├─ UF-FD-RB  [M': U R' U', M']
│  │  └─ UF-FD-BL  [U L U', M']
│  ├─ U列インターチェンジ (2手順)
│  │  ├─ UF-FD-LF  [U' M': R' E R, U']
│  │  └─ UF-FD-LB  [U' M': R E' R', U']
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-FD-UB  [R' F': E, R U R']
│  │  └─ UF-FD-RU  [R' F': E, R U' R']
│  ├─ S列インターチェンジ (5手順)
│  │  ├─ UF-FD-BU  [U': S, R' F' R]
│  │  ├─ UF-FD-LU  [U' D: R' F R, S']
│  │  ├─ UF-FD-RD  [U': S', R' F' R]
│  │  ├─ UF-FD-LD  [U: S, L F L']
│  │  └─ UF-FD-DB  [D: R F R', S']
│  └─ 暗記手順 (1手順)
│     └─ UF-FD-BD  [U M' U' M U2 M U M' U]
├─ DR(DRエッジD面)が1枚目
│  ├─ S列4-mover (4手順)
│  │  ├─ UF-DR-UB  [U: S, R2]
│  │  ├─ UF-DR-UR  [R' U: R/S]
│  │  ├─ UF-DR-FD  [U R' F': R/S]
│  │  └─ UF-DR-DL  [U': S', R2]
│  ├─ E列4-mover (7手順)
│  │  ├─ UF-DR-BD  [D' R' F': R2, E]
│  │  ├─ UF-DR-RF  [U' E': R/E]
│  │  ├─ UF-DR-FL  [U': R/E]
│  │  ├─ UF-DR-LF  [U' E': R'/E']
│  │  ├─ UF-DR-RB  [u': R'/E']
│  │  ├─ UF-DR-BL  [U': R'/E']
│  │  └─ UF-DR-LB  [u': R/E]
│  ├─ M列インターチェンジ (1手順)
│  │  └─ UF-DR-BU  [M, U' R2 U]
│  ├─ S列インターチェンジ (2手順)
│  │  ├─ UF-DR-RU  [S', R' F R]
│  │  └─ UF-DR-LD  [S, L' F' L]
│  ├─ F列インターチェンジ (3手順)
│  │  ├─ UF-DR-LU  [L: L S L', F']
│  │  ├─ UF-DR-DF  [R': F'/R S' R']
│  │  └─ UF-DR-DB  [D' R': F/R S' R']
│  └─ 暗記手順 (3手順)
│     ├─ UF-DR-UL  [R' U' R U R U R U' R' U']
│     ├─ UF-DR-FR  [U2 R U' R' U' R' U' R U R U']
│     └─ UF-DR-BR  [R' U R U R U R' U' R' U']
├─ RD(DRエッジR面)が1枚目
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-RD-LU  [R' F: R'/S]
│  │  └─ UF-RD-LD  [R' F: R/S']
│  ├─ E列4-mover (5手順)
│  │  ├─ UF-RD-RU  [R E' R' U': R'/E]
│  │  ├─ UF-RD-DF  [R' F': E, R2]
│  │  ├─ UF-RD-FR  [R' u': R/E']
│  │  ├─ UF-RD-BR  [S U: L/E]
│  │  └─ UF-RD-LB  [R' F: E', R2]
│  ├─ M列インターチェンジ (1手順)
│  │  └─ UF-RD-BU  [U R2 U', M']
│  ├─ U列インターチェンジ (4手順)
│  │  ├─ UF-RD-UB  [U/R' E' R]
│  │  ├─ UF-RD-UR  [R' E' R, U']
│  │  ├─ UF-RD-UL  [U2: R' E' R, U]
│  │  └─ UF-RD-LF  [S': U', R' E R]
│  ├─ E列インターチェンジ (1手順)
│  │  └─ UF-RD-BL  [R' E': R U' R', E']
│  ├─ S列インターチェンジ (5手順)
│  │  ├─ UF-RD-FD  [U': R' F' R, S']
│  │  ├─ UF-RD-DL  [R F R', S']
│  │  ├─ UF-RD-DB  [U': S, R' B R]
│  │  ├─ UF-RD-BD  [U': R B R', S']
│  │  └─ UF-RD-FL  [U': R' F2 R, S']
│  └─ R/L列インターチェンジ (2手順)
│     ├─ UF-RD-RF  [U' S U, R']
│     └─ UF-RD-RB  [U' S U, R]
├─ DL(DLエッジD面)が1枚目
│  ├─ S列4-mover (4手順)
│  │  ├─ UF-DL-UB  [U': S', L2]
│  │  ├─ UF-DL-UL  [L U': L'/S']
│  │  ├─ UF-DL-FD  [U' L F: L'/S']
│  │  └─ UF-DL-DR  [U': R2, S']
│  ├─ E列4-mover (6手順)
│  │  ├─ UF-DL-BD  [D L F: L2, E']
│  │  ├─ UF-DL-FR  [U: L'/E']
│  │  ├─ UF-DL-LF  [U E: L'/E']
│  │  ├─ UF-DL-BR  [U: L/E]
│  │  ├─ UF-DL-RB  [u: L'/E']
│  │  └─ UF-DL-LB  [u: L/E]
│  ├─ S列インターチェンジ (3手順)
│  │  ├─ UF-DL-BU  [U D: R' F' R, S]
│  │  ├─ UF-DL-LU  [S, L F' L']
│  │  └─ UF-DL-RD  [S', R F R']
│  ├─ F列インターチェンジ (3手順)
│  │  ├─ UF-DL-RU  [R': R' S' R, F]
│  │  ├─ UF-DL-DF  [L: F/L' S L]
│  │  └─ UF-DL-RF  [R' S' R, F]
│  └─ 暗記手順 (4手順)
│     ├─ UF-DL-UR  [L U L' U' L' U' L' U L U]
│     ├─ UF-DL-DB  [U' R' D' R D R D R D' R' U D']
│     ├─ UF-DL-FL  [U' R2 S' R2 S R E R2 E' R U]
│     └─ UF-DL-BL  [L U' L' U' L' U' L U L U]
├─ LD(DLエッジL面)が1枚目
│  ├─ S列4-mover (3手順)
│  │  ├─ UF-LD-RU  [L F': L/S']
│  │  ├─ UF-LD-LU  [l' U: L/S']
│  │  └─ UF-LD-RD  [R' F: R'/S']
│  ├─ E列4-mover (4手順)
│  │  ├─ UF-LD-DF  [L F: E', L2]
│  │  ├─ UF-LD-FL  [S' U': R/E]
│  │  ├─ UF-LD-RB  [L F': E, L2]
│  │  └─ UF-LD-BL  [S' U': R'/E']
│  ├─ M列インターチェンジ (1手順)
│  │  └─ UF-LD-BU  [U' L2 U, M']
│  ├─ U列インターチェンジ (4手順)
│  │  ├─ UF-LD-UB  [U'/L E L']
│  │  ├─ UF-LD-UR  [U2: L E L', U']
│  │  ├─ UF-LD-UL  [L E L', U]
│  │  └─ UF-LD-RF  [S: U, L E' L']
│  ├─ E列インターチェンジ (1手順)
│  │  └─ UF-LD-BR  [L E: L' U L, E]
│  ├─ S列インターチェンジ (5手順)
│  │  ├─ UF-LD-FD  [U: L F L', S]
│  │  ├─ UF-LD-DR  [L' F' L, S]
│  │  ├─ UF-LD-DB  [U: S', L B' L']
│  │  ├─ UF-LD-BD  [U: S', R' D R]
│  │  └─ UF-LD-FR  [U: L F2 L', S]
│  └─ R/L列インターチェンジ (2手順)
│     ├─ UF-LD-LF  [U S' U', L]
│     └─ UF-LD-LB  [U S' U', L']
├─ DB(DBエッジD面)が1枚目
│  ├─ M列4-mover (2手順)
│  │  ├─ UF-DB-UB  [U2, M]
│  │  └─ UF-DB-DF  [M' U2 M' U2 M2]
│  ├─ S列4-mover (1手順)
│  │  └─ UF-DB-DR  [U' R' D: R'/S']
│  ├─ E列4-mover (2手順)
│  │  ├─ UF-DB-FL  [U' D': R/E]
│  │  └─ UF-DB-BL  [U' D': R'/E']
│  ├─ M列インターチェンジ (8手順)
│  │  ├─ UF-DB-UR  [R U' R' U, M2]
│  │  ├─ UF-DB-RU  [M'/R U R' U']
│  │  ├─ UF-DB-FR  [U' R U, M2]
│  │  ├─ UF-DB-RF  [M'/U R U']
│  │  ├─ UF-DB-LF  [M'/U' L' U]
│  │  ├─ UF-DB-BR  [U' R' U, M2]
│  │  ├─ UF-DB-RB  [M'/U R' U']
│  │  └─ UF-DB-LB  [M'/U' L U]
│  ├─ S列インターチェンジ (5手順)
│  │  ├─ UF-DB-BU  [U: R B R', S]
│  │  ├─ UF-DB-LU  [D: S, L F' L']
│  │  ├─ UF-DB-FD  [D: S', R F R']
│  │  ├─ UF-DB-RD  [U': R' B R, S]
│  │  └─ UF-DB-LD  [U: L B' L', S']
│  └─ 暗記手順 (2手順)
│     ├─ UF-DB-UL  [D' R' U' R U R U R U' R' U' D]
│     └─ UF-DB-DL  [U' D R D R' D' R' D' R' D R U]
├─ BD(DBエッジB面)が1枚目
│  ├─ S列4-mover (1手順)
│  │  └─ UF-BD-UB  [U R' B: R/S]
│  ├─ E列4-mover (2手順)
│  │  ├─ UF-BD-DR  [D' R' F': E, R2]
│  │  └─ UF-BD-DL  [D L F: E', L2]
│  ├─ M列インターチェンジ (4手順)
│  │  ├─ UF-BD-FR  [U': R, U' M U]
│  │  ├─ UF-BD-FL  [U: L', U M U']
│  │  ├─ UF-BD-BR  [U': R', U' M U]
│  │  └─ UF-BD-BL  [U: L, U M U']
│  ├─ U列インターチェンジ (4手順)
│  │  ├─ UF-BD-RF  [U l: E', L' U' L]
│  │  ├─ UF-BD-LF  [U' r': E, R U R']
│  │  ├─ UF-BD-RB  [U M: l' E l, U']
│  │  └─ UF-BD-LB  [U' M: R E' R', U]
│  ├─ S列インターチェンジ (6手順)
│  │  ├─ UF-BD-BU  [U': S, R B R']
│  │  ├─ UF-BD-RU  [U D: L F' L', S]
│  │  ├─ UF-BD-LU  [U' D': R' F R, S']
│  │  ├─ UF-BD-DF  [D': R F R', S']
│  │  ├─ UF-BD-RD  [U': S', R B R']
│  │  └─ UF-BD-LD  [U: R' D R, S']
│  └─ 暗記手順 (3手順)
│     ├─ UF-BD-UR  [M U' M' U' M U' M' U']
│     ├─ UF-BD-UL  [M U M' U M U M' U]
│     └─ UF-BD-FD  [U M U M' U2 M' U' M U]
├─ FR(FRエッジF面)が1枚目
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-FR-UB  [R' U': R2, S]
│  │  └─ UF-FR-BR  [U: R'/S]
│  ├─ E列4-mover (6手順)
│  │  ├─ UF-FR-RU  [R' U' E': R/E]
│  │  ├─ UF-FR-LU  [S' U: L/E']
│  │  ├─ UF-FR-RD  [R' u': R'/E']
│  │  ├─ UF-FR-DL  [U: L/E']
│  │  ├─ UF-FR-FL  [R' U': R/E]
│  │  └─ UF-FR-BL  [R' U': R'/E']
│  ├─ M列インターチェンジ (4手順)
│  │  ├─ UF-FR-BU  [M, U' R U]
│  │  ├─ UF-FR-FD  [M', U' R U]
│  │  ├─ UF-FR-DB  [M2, U' R U]
│  │  └─ UF-FR-BD  [U2: M, U R U']
│  ├─ U列インターチェンジ (3手順)
│  │  ├─ UF-FR-UR  [E': R' E R, U']
│  │  ├─ UF-FR-UL  [L' E2 L, U]
│  │  └─ UF-FR-LB  [R: U', R E' R']
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-FR-LF  [R U' R', E]
│  │  └─ UF-FR-RB  [R U' R', E']
│  ├─ S列インターチェンジ (1手順)
│  │  └─ UF-FR-LD  [U: S, L F2 L']
│  └─ 暗記手順 (2手順)
│     ├─ UF-FR-DF  [R' f2 R2 U' R2 f2 R2 U' R']
│     └─ UF-FR-DR  [U R' U' R' U R U R U R' U2]
├─ RF(FRエッジR面)が1枚目
│  ├─ M列4-mover (1手順)
│  │  └─ UF-RF-LU  [R M: U'/M']
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-RF-LF  [U E: R/S]
│  │  └─ UF-RF-RB  [l' U': R'/S]
│  ├─ E列4-mover (3手順)
│  │  ├─ UF-RF-DF  [R2 F': E, R2]
│  │  ├─ UF-RF-DR  [U' E': R'/E]
│  │  └─ UF-RF-LB  [R2 F: E', R2]
│  ├─ M列インターチェンジ (3手順)
│  │  ├─ UF-RF-BU  [U R U', M']
│  │  ├─ UF-RF-FD  [D R' D', M]
│  │  └─ UF-RF-DB  [M/U R U']
│  ├─ U列インターチェンジ (7手順)
│  │  ├─ UF-RF-UB  [U'/L E' L']
│  │  ├─ UF-RF-UR  [U2: L E' L', U']
│  │  ├─ UF-RF-RU  [S': L E' L', U]
│  │  ├─ UF-RF-UL  [L E' L', U]
│  │  ├─ UF-RF-LD  [S: L E' L', U]
│  │  ├─ UF-RF-BD  [U M: U', L E' L']
│  │  └─ UF-RF-BL  [L: L E' L', U]
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-RF-FL  [r U r', E]
│  │  └─ UF-RF-BR  [E, R' U' R]
│  ├─ F列インターチェンジ (1手順)
│  │  └─ UF-RF-DL  [F, R' S' R]
│  └─ R/L列インターチェンジ (1手順)
│     └─ UF-RF-RD  [R', U' S U]
├─ FL(FLエッジF面)が1枚目
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-FL-UB  [L U: L2, S']
│  │  └─ UF-FL-BL  [U': L/S']
│  ├─ E列4-mover (7手順)
│  │  ├─ UF-FL-RU  [S U': R'/E]
│  │  ├─ UF-FL-DF  [U' D: R'/E]
│  │  ├─ UF-FL-DR  [U': R'/E]
│  │  ├─ UF-FL-LD  [S' U': R'/E]
│  │  ├─ UF-FL-DB  [U' D': R'/E]
│  │  ├─ UF-FL-FR  [R' U': R'/E]
│  │  └─ UF-FL-BR  [R U': R'/E]
│  ├─ M列インターチェンジ (3手順)
│  │  ├─ UF-FL-BU  [M, U L' U']
│  │  ├─ UF-FL-FD  [M', U L' U']
│  │  └─ UF-FL-BD  [U2: M, U' L' U]
│  ├─ U列インターチェンジ (4手順)
│  │  ├─ UF-FL-UR  [R E2 R', U']
│  │  ├─ UF-FL-UL  [E: L E' L', U]
│  │  ├─ UF-FL-LU  [r U: U, r' E r]
│  │  └─ UF-FL-RB  [L': U, L' E L]
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-FL-RF  [E, r U r']
│  │  └─ UF-FL-LB  [L' U L, E]
│  ├─ S列インターチェンジ (1手順)
│  │  └─ UF-FL-RD  [U': S', R' F2 R]
│  └─ 暗記手順 (1手順)
│     └─ UF-FL-DL  [U' R' E R2 E' R' S' R2 S R U]
├─ LF(FLエッジL面)が1枚目
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-LF-RF  [U E: R'/S]
│  │  └─ UF-LF-LB  [r U: L/S']
│  ├─ E列4-mover (3手順)
│  │  ├─ UF-LF-DR  [U' E': R/E']
│  │  ├─ UF-LF-DL  [U E: L/E']
│  │  └─ UF-LF-RB  [r U: R'/E]
│  ├─ M列インターチェンジ (2手順)
│  │  ├─ UF-LF-BU  [U' L' U, M']
│  │  └─ UF-LF-DB  [M/U' L' U]
│  ├─ U列インターチェンジ (8手順)
│  │  ├─ UF-LF-UB  [U/R' E R]
│  │  ├─ UF-LF-UR  [R' E R, U']
│  │  ├─ UF-LF-UL  [U2: R' E R, U]
│  │  ├─ UF-LF-LU  [S: R' E R, U']
│  │  ├─ UF-LF-FD  [U' M': U', R' E R]
│  │  ├─ UF-LF-RD  [S': R' E R, U']
│  │  ├─ UF-LF-BD  [U' M: U, R' E R]
│  │  └─ UF-LF-BR  [R': R' E R, U']
│  ├─ E列インターチェンジ (3手順)
│  │  ├─ UF-LF-RU  [U' r': R U' R', E]
│  │  ├─ UF-LF-FR  [E, R U' R']
│  │  └─ UF-LF-BL  [E', L U L']
│  ├─ F列インターチェンジ (1手順)
│  │  └─ UF-LF-DF  [U R' F2: R S R', F]
│  └─ R/L列インターチェンジ (1手順)
│     └─ UF-LF-LD  [L, U S' U']
├─ BR(BRエッジB面)が1枚目
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-BR-UB  [R U': R2, S]
│  │  └─ UF-BR-FR  [U: R/S]
│  ├─ E列4-mover (7手順)
│  │  ├─ UF-BR-RU  [R u': R'/E']
│  │  ├─ UF-BR-LU  [S' U: L'/E]
│  │  ├─ UF-BR-DF  [U D': L'/E]
│  │  ├─ UF-BR-RD  [S U: L'/E]
│  │  ├─ UF-BR-DL  [U: L'/E]
│  │  ├─ UF-BR-FL  [R U': R/E]
│  │  └─ UF-BR-BL  [R U': R'/E']
│  ├─ M列インターチェンジ (4手順)
│  │  ├─ UF-BR-BU  [M, U' R' U]
│  │  ├─ UF-BR-FD  [M', U' R' U]
│  │  ├─ UF-BR-DB  [M2, U' R' U]
│  │  └─ UF-BR-BD  [U2: M, U R' U']
│  ├─ U列インターチェンジ (3手順)
│  │  ├─ UF-BR-UR  [E: R E' R', U']
│  │  ├─ UF-BR-UL  [L E2 L', U]
│  │  └─ UF-BR-LF  [R': U', R' E R]
│  ├─ E列インターチェンジ (3手順)
│  │  ├─ UF-BR-LD  [L E2: L' U L, E']
│  │  ├─ UF-BR-RF  [R' U' R, E]
│  │  └─ UF-BR-LB  [R' U' R, E']
│  └─ 暗記手順 (1手順)
│     └─ UF-BR-DR  [U R U R U' R' U' R' U' R]
├─ RB(BRエッジR面)が1枚目
│  ├─ M列4-mover (1手順)
│  │  └─ UF-RB-LU  [r': U'/M']
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-RB-RF  [l' U': R/S]
│  │  └─ UF-RB-LB  [u: R'/S]
│  ├─ E列4-mover (5手順)
│  │  ├─ UF-RB-DF  [F': E, R2]
│  │  ├─ UF-RB-DR  [u': R/E']
│  │  ├─ UF-RB-DL  [u: L/E']
│  │  ├─ UF-RB-LD  [L F': L2, E]
│  │  └─ UF-RB-LF  [r U: R/E]
│  ├─ M列インターチェンジ (3手順)
│  │  ├─ UF-RB-BU  [U R' U', M']
│  │  ├─ UF-RB-FD  [M': M', U R' U']
│  │  └─ UF-RB-DB  [M/U R' U']
│  ├─ U列インターチェンジ (6手順)
│  │  ├─ UF-RB-UB  [U'/L' E L]
│  │  ├─ UF-RB-UR  [U2: L' E L, U']
│  │  ├─ UF-RB-RU  [S': L' E L, U]
│  │  ├─ UF-RB-UL  [L' E L, U]
│  │  ├─ UF-RB-BD  [U M: U', l' E l]
│  │  └─ UF-RB-FL  [L': L' E L, U]
│  ├─ E列インターチェンジ (2手順)
│  │  ├─ UF-RB-FR  [E', R U' R']
│  │  └─ UF-RB-BL  [E, L U L']
│  └─ R/L列インターチェンジ (1手順)
│     └─ UF-RB-RD  [R, U' S U]
├─ BL(BLエッジB面)が1枚目
│  ├─ M列4-mover (1手順)
│  │  └─ UF-BL-LU  [U' l: U'/M']
│  ├─ S列4-mover (2手順)
│  │  ├─ UF-BL-UB  [L' U: L2, S']
│  │  └─ UF-BL-FL  [U': L'/S']
│  ├─ E列4-mover (7手順)
│  │  ├─ UF-BL-RU  [S U': R/E']
│  │  ├─ UF-BL-DF  [U' D: R/E']
│  │  ├─ UF-BL-DR  [U': R/E']
│  │  ├─ UF-BL-LD  [S' U': R/E']
│  │  ├─ UF-BL-DB  [U' D': R/E']
│  │  ├─ UF-BL-FR  [R' U': R/E']
│  │  └─ UF-BL-BR  [R U': R/E']
│  ├─ M列インターチェンジ (3手順)
│  │  ├─ UF-BL-BU  [M, U L U']
│  │  ├─ UF-BL-FD  [M', U L U']
│  │  └─ UF-BL-BD  [U2: M, U' L U]
│  ├─ U列インターチェンジ (3手順)
│  │  ├─ UF-BL-UR  [R' E2 R, U']
│  │  ├─ UF-BL-UL  [E': L' E L, U]
│  │  └─ UF-BL-RF  [L: U, L E' L']
│  ├─ E列インターチェンジ (3手順)
│  │  ├─ UF-BL-RD  [R' E2: R U' R', E]
│  │  ├─ UF-BL-LF  [L U L', E']
│  │  └─ UF-BL-RB  [L U L', E]
│  └─ 暗記手順 (1手順)
│     └─ UF-BL-DL  [U' L' U' L' U L U L U L']
└─ LB(BLエッジL面)が1枚目
   ├─ M列4-mover (1手順)
   │  └─ UF-LB-RU  [l: U/M']
   ├─ S列4-mover (2手順)
   │  ├─ UF-LB-LF  [r U: L'/S']
   │  └─ UF-LB-RB  [u: R/S]
   ├─ E列4-mover (5手順)
   │  ├─ UF-LB-DF  [F: E', L2]
   │  ├─ UF-LB-DR  [u': R'/E]
   │  ├─ UF-LB-RD  [R' F: R2, E']
   │  ├─ UF-LB-DL  [u: L'/E]
   │  └─ UF-LB-RF  [R2 F: R2, E']
   ├─ M列インターチェンジ (2手順)
   │  ├─ UF-LB-BU  [U' L U, M']
   │  └─ UF-LB-DB  [M/U' L U]
   ├─ U列インターチェンジ (7手順)
   │  ├─ UF-LB-UB  [U/R E' R']
   │  ├─ UF-LB-UR  [R E' R', U']
   │  ├─ UF-LB-UL  [U2: R E' R', U]
   │  ├─ UF-LB-LU  [S: R E' R', U']
   │  ├─ UF-LB-FD  [U' M': U', R E' R']
   │  ├─ UF-LB-BD  [U' M: U, R E' R']
   │  └─ UF-LB-FR  [R: R E' R', U']
   ├─ E列インターチェンジ (2手順)
   │  ├─ UF-LB-FL  [E, L' U L]
   │  └─ UF-LB-BR  [E', R' U' R]
   └─ R/L列インターチェンジ (1手順)
      └─ UF-LB-LD  [L', U S' U']
```

## 付録A: カタログ記事本文中で言及されている代替手順

- UF-DB-DF : [M u2 M u2] (M列4-moverの文脈で言及)
- UF-DR-UB : [U': R2, S] (S列4-moverの文脈で言及)
- UF-DR-DL : [U: L2, S] (S列4-moverの文脈で言及)
- UF-FR-UB : [R' U: S, R2] (S列4-moverの文脈で言及)
- UF-BL-UB : [U/R' E2 R] (S列4-moverの文脈で言及)
- UF-RD-LD : [L F': L/S] (S列4-moverの文脈で言及)
- UF-DR-FD : [U R' F': R/S] (M列インターチェンジの文脈で言及)
- UF-UR-RD : [U', R E R'] (U列インターチェンジの文脈で言及)
- UF-RD-LF : [M' U: R/E] (U列インターチェンジの文脈で言及)
- UF-BD-RU : [M2 U M U M' U M U M] (S列インターチェンジの文脈で言及)
- UF-UL-DF : [M U2 M,U'] (F列インターチェンジの文脈で言及)
- UF-RF-DL : [U E: L'/E] (F列インターチェンジの文脈で言及)

## 付録B: 鏡像で分類が異なるペア(37組・カタログ記事の手順)

原理の必然ではなく、筆者の指使いの好みで分類が分かれている箇所。自分用に手順を選び直すときは、ここが「どちらの系統でも組める」自由度のある場所。

| 手順 | 分類 | 鏡像の手順 | 分類 |
|---|---|---|---|
| UF-BU-UR | M列インターチェンジ | UF-BU-UL | S列インターチェンジ |
| UF-BU-DR | M列インターチェンジ | UF-BU-DL | S列インターチェンジ |
| UF-UR-BU | M列インターチェンジ | UF-UL-BU | S列インターチェンジ |
| UF-UR-DF | 暗記手順 | UF-UL-DF | F列インターチェンジ |
| UF-UR-DL | S列4-mover | UF-UL-DR | 暗記手順 |
| UF-UR-DB | M列インターチェンジ | UF-UL-DB | 暗記手順 |
| UF-RU-FD | E列インターチェンジ | UF-LU-FD | S列インターチェンジ |
| UF-RU-RD | E列4-mover | UF-LU-LD | S列4-mover |
| UF-RU-DB | M列インターチェンジ | UF-LU-DB | S列インターチェンジ |
| UF-RU-FR | E列4-mover | UF-LU-FL | U列インターチェンジ |
| UF-RU-LF | E列インターチェンジ | UF-LU-RF | M列4-mover |
| UF-RU-BR | E列4-mover | UF-LU-BL | M列4-mover |
| UF-DF-FR | S列4-mover | UF-DF-FL | E列4-mover |
| UF-DF-RF | E列4-mover | UF-DF-LF | F列インターチェンジ |
| UF-DF-BR | S列4-mover | UF-DF-BL | E列4-mover |
| UF-FD-RU | E列インターチェンジ | UF-FD-LU | S列インターチェンジ |
| UF-FD-RF | M列インターチェンジ | UF-FD-LF | U列インターチェンジ |
| UF-FD-RB | M列インターチェンジ | UF-FD-LB | U列インターチェンジ |
| UF-DR-BU | M列インターチェンジ | UF-DL-BU | S列インターチェンジ |
| UF-DR-DB | F列インターチェンジ | UF-DL-DB | 暗記手順 |
| UF-DR-LF | E列4-mover | UF-DL-RF | F列インターチェンジ |
| UF-RD-RU | E列4-mover | UF-LD-LU | S列4-mover |
| UF-DB-UR | M列インターチェンジ | UF-DB-UL | 暗記手順 |
| UF-DB-RU | M列インターチェンジ | UF-DB-LU | S列インターチェンジ |
| UF-DB-DR | S列4-mover | UF-DB-DL | 暗記手順 |
| UF-DB-FR | M列インターチェンジ | UF-DB-FL | E列4-mover |
| UF-DB-BR | M列インターチェンジ | UF-DB-BL | E列4-mover |
| UF-FR-RU | E列4-mover | UF-FL-LU | U列インターチェンジ |
| UF-FR-DF | 暗記手順 | UF-FL-DF | E列4-mover |
| UF-FR-DB | M列インターチェンジ | UF-FL-DB | E列4-mover |
| UF-RF-LU | M列4-mover | UF-LF-RU | E列インターチェンジ |
| UF-RF-DF | E列4-mover | UF-LF-DF | F列インターチェンジ |
| UF-RF-FD | M列インターチェンジ | UF-LF-FD | U列インターチェンジ |
| UF-RF-DL | F列インターチェンジ | UF-LF-DR | E列4-mover |
| UF-BR-RU | E列4-mover | UF-BL-LU | M列4-mover |
| UF-BR-DB | M列インターチェンジ | UF-BL-DB | E列4-mover |
| UF-RB-FD | M列インターチェンジ | UF-LB-FD | U列インターチェンジ |

## 付録C: 判定ルールとカタログ採用手順の対応(全220ペア)

カテゴリ対応(入門記事↔カタログ記事): U面IC↔U列IC / M列IC↔M列IC / E列IC↔E列IC / S列IC↔S列IC / R/L面IC↔R/L列IC / M列4手↔M4 / E列4手↔E4 / S列4手↔S4 / その他↔暗記。
一致欄: ○=往復ともカテゴリ一致(143ペア) / △=片方向のみ一致(8ペア) / ×=両方向とも別系統(69ペア)。方向単位では440手順中294が一致。

### 系統的な相違パターン(×の主な中身)

- **入門記事はM列ICに寄せる範囲が広い**: ◆2はFD/DB/BU/BD×R列・L列を一律M列ICで処理するが(記事内でも「一部速くないが分かりやすい」とされる)、カタログ記事はその一部をE列4-mover(16方向)・S列IC(16方向)・E列IC(6方向)などの専用手順に乗り換えている。
- **入門記事のR/L面IC(◆5)をカタログ記事はほぼ使わない**: UR×FR/BRや DR×FR/BR は、カタログ記事ではU列IC(8方向)や暗記手順(8方向)。逆にカタログ記事のR/L列IC(8手順)はRD×RF/RB・LD×LF/LB だけで、これは◆5(2)と一致する。
- **カタログ記事のF列ICは入門記事の体系に存在しない**: F列16手順の該当ペアは、入門記事ではその他(11)・E列4手(4)・M列IC(1)に散る。
- **Uperm系の所属は名前だけの違い**: 入門記事は便宜上M列4手系(◆6(2))、カタログ記事は[R2: U'/S']系をS列4-mover、[M2: U/M]系をM列4-moverに分類。
- **FD・BDペアは入門記事の明示ルール外**(220ペア中唯一)。

### 対応表

| ペア | ルール分類(入門記事) | カタログ UF-A-B | カタログ UF-B-A | 一致 |
|---|---|---|---|---|
| UB・UR | ◆6(2) M列4手 | S4 | S4 | × |
| UB・RU | ◆6(3-2) M列4手 | S4 | S4 | × |
| UB・UL | ◆6(2) M列4手 | S4 | S4 | × |
| UB・LU | ◆6(3-2) M列4手 | S4 | S4 | × |
| UB・DF | ◆6(1) M列4手 | M4 | M4 | ○ |
| UB・FD | ◆6(4) M列4手 | E列IC | E列IC | × |
| UB・DR | ◆8(1) S列4手 | S4 | S4 | ○ |
| UB・RD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UB・DL | ◆8(1) S列4手 | S4 | S4 | ○ |
| UB・LD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UB・DB | ◆6(1) M列4手 | M4 | M4 | ○ |
| UB・BD | ◆6(4) M列4手 | S4 | S4 | × |
| UB・FR | ◆8(1-1) S列4手 | S4 | S4 | ○ |
| UB・RF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UB・FL | ◆8(1-2) S列4手 | S4 | S4 | ○ |
| UB・LF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UB・BR | ◆8(1-1) S列4手 | S4 | S4 | ○ |
| UB・RB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UB・BL | ◆8(1-2) S列4手 | S4 | S4 | ○ |
| UB・LB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| BU・UR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・RU | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・UL | ◆2(1) M列IC | S列IC | S列IC | × |
| BU・LU | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・DF | ◆4(3) S列IC | S列IC | S列IC | ○ |
| BU・FD | ◆4(3) S列IC | S列IC | S列IC | ○ |
| BU・DR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・RD | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・DL | ◆2(1) M列IC | S列IC | S列IC | × |
| BU・LD | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・DB | ◆4(3') S列IC | S列IC | S列IC | ○ |
| BU・BD | ◆4(3') S列IC | S列IC | S列IC | ○ |
| BU・FR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・RF | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・FL | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・LF | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・BR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・RB | ◆2(3) M列IC | M列IC | M列IC | ○ |
| BU・BL | ◆2(1) M列IC | M列IC | M列IC | ○ |
| BU・LB | ◆2(3) M列IC | M列IC | M列IC | ○ |
| UR・UL | ◆6(2) M列4手 | M4 | M4 | ○ |
| UR・LU | ◆4(1) S列IC | S列IC | S列IC | ○ |
| UR・DF | ◆9(1-1) その他 | 暗記 | F列IC | △ |
| UR・FD | ◆2(1) M列IC | M列IC | M列IC | ○ |
| UR・DR | ◆8(3-1) S列4手 | U列IC | S4 | △ |
| UR・RD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UR・DL | ◆9(4) その他 | S4 | 暗記 | △ |
| UR・LD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UR・DB | ◆2(1) M列IC | M列IC | M列IC | ○ |
| UR・BD | ◆9(2-1) その他 | 暗記 | 暗記 | ○ |
| UR・FR | ◆5(1) R/L面IC | U列IC | U列IC | × |
| UR・RF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UR・FL | ◆1(1-3) U面IC | U列IC | U列IC | ○ |
| UR・LF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UR・BR | ◆5(1) R/L面IC | U列IC | U列IC | × |
| UR・RB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UR・BL | ◆1(1-3) U面IC | U列IC | U列IC | ○ |
| UR・LB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| RU・UL | ◆4(1) S列IC | S列IC | S列IC | ○ |
| RU・LU | ◆6(3) M列4手 | M4 | M4 | ○ |
| RU・DF | ◆7(1) E列4手 | E4 | E4 | ○ |
| RU・FD | ◆2(3-2) M列IC | E列IC | E列IC | × |
| RU・DR | ◆4(1) S列IC | S列IC | S列IC | ○ |
| RU・RD | ◆8(5) S列4手 | E4 | E4 | × |
| RU・DL | ◆9(3) その他 | F列IC | F列IC | × |
| RU・LD | ◆8(4) S列4手 | S4 | S4 | ○ |
| RU・DB | ◆2(3-1) M列IC | M列IC | M列IC | ○ |
| RU・BD | ◆9(2-2) その他 | 暗記 | S列IC | △ |
| RU・FR | ◆6(3-3) M列4手 | E4 | E4 | × |
| RU・RF | ◆1(1-2) U面IC | U列IC | U列IC | ○ |
| RU・FL | ◆4(1-1) S列IC | E4 | E4 | × |
| RU・LF | ◆6(3-1) M列4手 | E列IC | E列IC | × |
| RU・BR | ◆6(3-3) M列4手 | E4 | E4 | × |
| RU・RB | ◆1(1-2) U面IC | U列IC | U列IC | ○ |
| RU・BL | ◆4(1-1) S列IC | E4 | E4 | × |
| RU・LB | ◆6(3-1) M列4手 | M4 | M4 | ○ |
| UL・DF | ◆9(1-1) その他 | F列IC | F列IC | × |
| UL・FD | ◆2(1) M列IC | M列IC | M列IC | ○ |
| UL・DR | ◆9(4) その他 | 暗記 | 暗記 | ○ |
| UL・RD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UL・DL | ◆8(3-1) S列4手 | U列IC | S4 | △ |
| UL・LD | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UL・DB | ◆2(1) M列IC | 暗記 | 暗記 | × |
| UL・BD | ◆9(2-1) その他 | 暗記 | 暗記 | ○ |
| UL・FR | ◆1(1-3) U面IC | U列IC | U列IC | ○ |
| UL・RF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UL・FL | ◆5(1-1) R/L面IC | U列IC | U列IC | × |
| UL・LF | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UL・BR | ◆1(1-3) U面IC | U列IC | U列IC | ○ |
| UL・RB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| UL・BL | ◆5(1-1) R/L面IC | U列IC | U列IC | × |
| UL・LB | ◆1(1) U面IC | U列IC | U列IC | ○ |
| LU・DF | ◆7(1) E列4手 | E4 | E4 | ○ |
| LU・FD | ◆2(3-2) M列IC | S列IC | S列IC | × |
| LU・DR | ◆9(3) その他 | F列IC | F列IC | × |
| LU・RD | ◆8(4) S列4手 | S4 | S4 | ○ |
| LU・DL | ◆4(1) S列IC | S列IC | S列IC | ○ |
| LU・LD | ◆8(5) S列4手 | S4 | S4 | ○ |
| LU・DB | ◆2(3-1) M列IC | S列IC | S列IC | × |
| LU・BD | ◆9(2-2) その他 | 暗記 | S列IC | △ |
| LU・FR | ◆4(1-1) S列IC | E4 | E4 | × |
| LU・RF | ◆6(3-1) M列4手 | M4 | M4 | ○ |
| LU・FL | ◆6(3-3) M列4手 | U列IC | U列IC | × |
| LU・LF | ◆1(1-1) U面IC | U列IC | U列IC | ○ |
| LU・BR | ◆4(1-1) S列IC | E4 | E4 | × |
| LU・RB | ◆6(3-1) M列4手 | M4 | M4 | ○ |
| LU・BL | ◆6(3-3) M列4手 | M4 | M4 | ○ |
| LU・LB | ◆1(1-1) U面IC | U列IC | U列IC | ○ |
| DF・DR | ◆9(1-2) その他 | F列IC | F列IC | × |
| DF・RD | ◆7(1) E列4手 | E4 | E4 | ○ |
| DF・DL | ◆9(1-2) その他 | F列IC | F列IC | × |
| DF・LD | ◆7(1) E列4手 | E4 | E4 | ○ |
| DF・DB | ◆6(1-1) M列4手 | M4 | M4 | ○ |
| DF・BD | ◆4(2-1) S列IC | S列IC | S列IC | ○ |
| DF・FR | ◆6(5) M列4手 | S4 | 暗記 | × |
| DF・RF | ◆7(1) E列4手 | E4 | E4 | ○ |
| DF・FL | ◆6(5) M列4手 | E4 | E4 | × |
| DF・LF | ◆7(1) E列4手 | F列IC | F列IC | × |
| DF・BR | ◆6(5) M列4手 | S4 | E4 | × |
| DF・RB | ◆7(1) E列4手 | E4 | E4 | ○ |
| DF・BL | ◆6(5) M列4手 | E4 | E4 | × |
| DF・LB | ◆7(1) E列4手 | E4 | E4 | ○ |
| FD・DR | ◆2(1) M列IC | M列IC | S4 | △ |
| FD・RD | ◆4(4) S列IC | S列IC | S列IC | ○ |
| FD・DL | ◆2(1) M列IC | M列IC | S4 | △ |
| FD・LD | ◆4(4) S列IC | S列IC | S列IC | ○ |
| FD・DB | ◆4(2-1) S列IC | S列IC | S列IC | ○ |
| FD・BD | （明示ルールなし） | 暗記 | 暗記 | × |
| FD・FR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| FD・RF | ◆2(3-2) M列IC | M列IC | M列IC | ○ |
| FD・FL | ◆2(1) M列IC | M列IC | M列IC | ○ |
| FD・LF | ◆2(3-2) M列IC | U列IC | U列IC | × |
| FD・BR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| FD・RB | ◆2(3-2) M列IC | M列IC | M列IC | ○ |
| FD・BL | ◆2(1) M列IC | M列IC | M列IC | ○ |
| FD・LB | ◆2(3-2) M列IC | U列IC | U列IC | × |
| DR・DL | ◆8(2) S列4手 | S4 | S4 | ○ |
| DR・LD | ◆4(2) S列IC | S列IC | S列IC | ○ |
| DR・DB | ◆2(1) M列IC | F列IC | S4 | × |
| DR・BD | ◆2(2) M列IC | E4 | E4 | × |
| DR・FR | ◆5(1-2) R/L面IC | 暗記 | 暗記 | × |
| DR・RF | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| DR・FL | ◆7(2) E列4手 | E4 | E4 | ○ |
| DR・LF | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| DR・BR | ◆5(1-2) R/L面IC | 暗記 | 暗記 | × |
| DR・RB | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| DR・BL | ◆7(2) E列4手 | E4 | E4 | ○ |
| DR・LB | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| RD・DL | ◆4(2) S列IC | S列IC | S列IC | ○ |
| RD・LD | ◆8(4-1) S列4手 | S4 | S4 | ○ |
| RD・DB | ◆2(3-1) M列IC | S列IC | S列IC | × |
| RD・BD | ◆4(4') S列IC | S列IC | S列IC | ○ |
| RD・FR | ◆2(1-1) M列IC | E4 | E4 | × |
| RD・RF | ◆5(2) R/L面IC | R/L列IC | R/L列IC | ○ |
| RD・FL | ◆2(1-1) M列IC | S列IC | S列IC | × |
| RD・LF | ◆1(1-1) U面IC | U列IC | U列IC | ○ |
| RD・BR | ◆2(1-1) M列IC | E4 | E4 | × |
| RD・RB | ◆5(2) R/L面IC | R/L列IC | R/L列IC | ○ |
| RD・BL | ◆2(1-1) M列IC | E列IC | E列IC | × |
| RD・LB | ◆1(1-1) U面IC | E4 | E4 | × |
| DL・DB | ◆2(1) M列IC | 暗記 | 暗記 | × |
| DL・BD | ◆2(2) M列IC | E4 | E4 | × |
| DL・FR | ◆7(2) E列4手 | E4 | E4 | ○ |
| DL・RF | ◆7(2-2) E列4手 | F列IC | F列IC | × |
| DL・FL | ◆5(1-2) R/L面IC | 暗記 | 暗記 | × |
| DL・LF | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| DL・BR | ◆7(2) E列4手 | E4 | E4 | ○ |
| DL・RB | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| DL・BL | ◆5(1-2) R/L面IC | 暗記 | 暗記 | × |
| DL・LB | ◆7(2-2) E列4手 | E4 | E4 | ○ |
| LD・DB | ◆2(3-1) M列IC | S列IC | S列IC | × |
| LD・BD | ◆4(4') S列IC | S列IC | S列IC | ○ |
| LD・FR | ◆2(1-1) M列IC | S列IC | S列IC | × |
| LD・RF | ◆1(1-2) U面IC | U列IC | U列IC | ○ |
| LD・FL | ◆2(1-1) M列IC | E4 | E4 | × |
| LD・LF | ◆5(2-1) R/L面IC | R/L列IC | R/L列IC | ○ |
| LD・BR | ◆2(1-1) M列IC | E列IC | E列IC | × |
| LD・RB | ◆1(1-2) U面IC | E4 | E4 | × |
| LD・BL | ◆2(1-1) M列IC | E4 | E4 | × |
| LD・LB | ◆5(2-1) R/L面IC | R/L列IC | R/L列IC | ○ |
| DB・FR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| DB・RF | ◆2(3-1) M列IC | M列IC | M列IC | ○ |
| DB・FL | ◆2(1) M列IC | E4 | E4 | × |
| DB・LF | ◆2(3-1) M列IC | M列IC | M列IC | ○ |
| DB・BR | ◆2(1) M列IC | M列IC | M列IC | ○ |
| DB・RB | ◆2(3-1) M列IC | M列IC | M列IC | ○ |
| DB・BL | ◆2(1) M列IC | E4 | E4 | × |
| DB・LB | ◆2(3-1) M列IC | M列IC | M列IC | ○ |
| BD・FR | ◆2(2) M列IC | M列IC | M列IC | ○ |
| BD・RF | ◆9(2-2') その他 | U列IC | U列IC | × |
| BD・FL | ◆2(2) M列IC | M列IC | M列IC | ○ |
| BD・LF | ◆9(2-2') その他 | U列IC | U列IC | × |
| BD・BR | ◆2(2) M列IC | M列IC | M列IC | ○ |
| BD・RB | ◆9(2-2') その他 | U列IC | U列IC | × |
| BD・BL | ◆2(2) M列IC | M列IC | M列IC | ○ |
| BD・LB | ◆9(2-2') その他 | U列IC | U列IC | × |
| FR・FL | ◆7(2-1) E列4手 | E4 | E4 | ○ |
| FR・LF | ◆3(1) E列IC | E列IC | E列IC | ○ |
| FR・BR | ◆8(3) S列4手 | S4 | S4 | ○ |
| FR・RB | ◆3(1) E列IC | E列IC | E列IC | ○ |
| FR・BL | ◆7(2-1) E列4手 | E4 | E4 | ○ |
| FR・LB | ◆3(2) E列IC | U列IC | U列IC | × |
| RF・FL | ◆3(1) E列IC | E列IC | E列IC | ○ |
| RF・LF | ◆8(3-3) S列4手 | S4 | S4 | ○ |
| RF・BR | ◆3(1) E列IC | E列IC | E列IC | ○ |
| RF・RB | ◆8(3-2) S列4手 | S4 | S4 | ○ |
| RF・BL | ◆3(2) E列IC | U列IC | U列IC | × |
| RF・LB | ◆7(3) E列4手 | E4 | E4 | ○ |
| FL・BR | ◆7(2-1) E列4手 | E4 | E4 | ○ |
| FL・RB | ◆3(2) E列IC | U列IC | U列IC | × |
| FL・BL | ◆8(3) S列4手 | S4 | S4 | ○ |
| FL・LB | ◆3(1) E列IC | E列IC | E列IC | ○ |
| LF・BR | ◆3(2) E列IC | U列IC | U列IC | × |
| LF・RB | ◆7(3) E列4手 | E4 | E4 | ○ |
| LF・BL | ◆3(1) E列IC | E列IC | E列IC | ○ |
| LF・LB | ◆8(3-2) S列4手 | S4 | S4 | ○ |
| BR・BL | ◆7(2-1) E列4手 | E4 | E4 | ○ |
| BR・LB | ◆3(1) E列IC | E列IC | E列IC | ○ |
| RB・BL | ◆3(1) E列IC | E列IC | E列IC | ○ |
| RB・LB | ◆8(3-3) S列4手 | S4 | S4 | ○ |
