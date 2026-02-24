# YUKISIKI LP ドメイン設定ガイド

## 概要

このプロジェクトは **Vercel** でホスティングしています。
独自ドメインを紐づけるための手順と、firefitness-lpで発生した問題の防止策をまとめます。

---

## 前提条件

| 項目 | 設定 |
|------|------|
| ホスティング | Vercel |
| Vercelプロジェクト | yukisiki-lp |
| 現在のURL | https://yukisiki-lp.vercel.app/ |
| ドメイン管理 | **未確認**（多賀さんに要確認） |
| GitHubリポジトリ | https://github.com/soudousya-lab/yukisiki-lp |

---

## まず多賀さんに確認すること

1. **使うドメイン名** — 新規取得？ 既存ドメインのサブドメイン（例: `lp.yukisiki-kogao.com`）？
2. **ドメイン管理会社** — お名前.com？ Xserver？ ムームードメイン？ その他？
3. **サーバー契約とセットか** — 永年無料ドメイン等でサーバーと紐づいているか？

### なぜこれが重要か（firefitness-lpの教訓）

firefitness-lpでは**Xserverの永年無料ドメイン特典**でドメインを取得していた。
そのため以下の制約があり、DNS設定でトラブルが発生した：

- **ネームサーバーがXserverに固定** → Vercelにネームサーバーを移管できない
- **Xserverの管理画面でDNS設定を手動変更する必要がある** → 操作ミスが起きやすい
- **Xserverのデフォルト設定（Aレコード等）が残っていてVercelと競合** → 403エラー、SSL証明書エラー

多賀さんのドメインも同様のセット契約の場合、同じ問題が起きる可能性がある。

---

## 多賀さんにやってもらう手順

### ステップ1: Vercelにドメインを追加

1. https://vercel.com にアクセス（GitHubアカウントでログイン）
2. プロジェクト「yukisiki-lp」を選択
3. **Settings** → **Domains** を開く
4. 使用するドメイン名を入力して **Add** をクリック
5. Vercelが表示する **設定値をメモする**（以下で使う）

**Vercelが表示する設定値の例：**
```
ルートドメインの場合:   A レコード → 76.76.21.21
www の場合:            CNAME → cname.vercel-dns.com
```

### ステップ2: お名前.comでDNS設定を変更

1. https://navi.onamae.com/ にログイン
2. **ドメイン設定** → **DNS設定/転送設定** → 対象ドメインを選択
3. **DNSレコード設定を利用する** → **設定する**

#### 設定するレコード

| ホスト名 | TYPE | VALUE | 優先 | TTL |
|----------|------|-------|------|-----|
| （空欄） | A | 76.76.21.21 | - | 3600 |
| www | CNAME | cname.vercel-dns.com | - | 3600 |

**重要：**
- Vercelダッシュボードに表示された値を正確に入力すること
- 既存のAレコード（お名前.comのデフォルト設定）がある場合は**削除してから**新しいレコードを追加

### ステップ3: 反映を待つ

- DNS変更の反映には **数分〜最大72時間**（通常は30分以内）
- Vercelダッシュボードで「**Valid Configuration**」の緑表示を確認
- SSL証明書はVercelが**自動発行**（数分〜数時間）

---

## firefitness-lpで起きた問題と防止策

### 問題1: 403 Forbidden / SSL証明書エラー

**原因:** Aレコードが旧サーバーのIPを指していた
**防止策:**
- [ ] 既存のAレコードを**削除**してからVercelのIP（76.76.21.21）を設定
- [ ] お名前.comの「転送設定」が残っていないか確認

### 問題2: 「無効なURLです」エラー

**原因:** DNS変更直後でSSL証明書が未発行
**防止策:**
- [ ] Vercelダッシュボードで「Valid Configuration」を確認してから焦らない
- [ ] SSL証明書の発行には最大数時間かかることがある

### 問題3: PCでだけアクセスできない

**原因:** PCのDNSキャッシュが古い情報を保持
**防止策:**
```bash
# Mac でDNSキャッシュをクリア
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder

# Windows でDNSキャッシュをクリア
ipconfig /flushdns
```
- [ ] DNSキャッシュをクリアしてから確認する

---

## ドメイン管理会社別の注意点

### 共通：やってはいけないこと

1. **ネームサーバーを安易に変更しない**
   - 特にサーバー契約とセットの場合、ネームサーバー変更でメール等が全停止する
   - DNSレコードだけ変更するのが安全

2. **既存のAレコードを残さない**
   - デフォルトのAレコード（パーキングページ/旧サーバー用）が残っているとVercelと競合する
   - **必ず削除してから** VercelのIPを設定する
   - これがfirefitness-lpで403エラーが出た直接原因

3. **URL転送機能を使わない**
   - お名前.comの「転送Plus」、Xserverの「リダイレクト設定」等はVercelと競合する

### パターン A: お名前.com単体

**DNS設定画面への行き方：**
1. https://navi.onamae.com/ にログイン
2. 上部メニュー「ドメイン設定」をクリック
3. 「DNS設定/転送設定」をクリック
4. 対象ドメインにチェックを入れて「次へ」
5. 「DNSレコード設定を利用する」の「設定する」をクリック
6. ここでAレコード・CNAMEレコードを追加

### パターン B: Xserver（永年無料ドメインセット等）

**firefitness-lpと同じパターン。最も注意が必要。**

**DNS設定画面への行き方：**
1. https://www.xserver.ne.jp/ のサーバーパネルにログイン
2. 「DNSレコード設定」をクリック
3. 対象ドメインを選択
4. 「DNSレコード追加」タブでAレコード・CNAMEを設定

**Xserver固有の注意：**
- 「ドメイン設定」からドメインを削除するとDNSレコードも消える（firefitness-lpで確認済み）
- ネームサーバーは `ns1-5.xserver.jp` のまま変更しない
- Xserverのウェブサーバーが動いているとリクエストを横取りする → Aレコード変更が必須

### パターン C: ムームードメイン

**DNS設定画面への行き方：**
1. https://muumuu-domain.com/ のコントロールパネルにログイン
2. 「ドメイン操作」→「ムームーDNS」
3. 対象ドメインの「変更」をクリック
4. カスタム設定でAレコード・CNAMEを追加

---

## トラブルシューティング

### DNS設定の確認コマンド

```bash
# 現在のDNS解決結果を確認
dig example.com +short

# Google DNS経由で確認（ローカルキャッシュの影響を受けない）
dig example.com @8.8.8.8 +short

# 期待する結果: 76.76.21.21
```

### Vercel接続テスト

```bash
# VercelのIPに直接接続
curl -sI --resolve example.com:443:76.76.21.21 https://example.com

# server: Vercel が返ってくれば正常
```

### Vercelダッシュボードで確認

1. https://vercel.com にログイン
2. yukisiki-lp → Settings → Domains
3. 各ドメインが「**Valid Configuration**」になっていることを確認
4. SSL証明書のステータスも確認

---

## チェックリスト（ドメイン設定完了確認）

- [ ] Vercelダッシュボードでドメインが「Valid Configuration」
- [ ] `https://ドメイン名/` でサイトが表示される
- [ ] `https://www.ドメイン名/` でもサイトが表示される
- [ ] SSL証明書が正しい（ブラウザの鍵マークをクリックして確認）
- [ ] PC・スマホ両方からアクセスできる
- [ ] 旧URL（yukisiki-lp.vercel.app）も引き続きアクセスできる

---

## 連絡先

- お名前.com サポート: https://help.onamae.com/
- Vercel サポート: https://vercel.com/support

---

*作成日: 2026年2月24日*
*参考: firefitness-lp/docs/reference/DOMAIN_SETUP_NOTES.md*
