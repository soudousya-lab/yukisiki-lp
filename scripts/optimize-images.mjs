// 画像最適化スクリプト（sharp使用）
// 用途: コードで描画される写真PNGをWebP化し、元PNGはバックアップに退避
// 実行: node scripts/optimize-images.mjs [--apply]
// デフォルトはdry-run（変換せず対象一覧と推定削減のみ表示）

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd());
const PUB = path.join(ROOT, "public", "images");
const BACKUP = path.join(PUB, "_original_png");
const APPLY = process.argv.includes("--apply");

// 変換対象: { 相対パス(public/images基準), 出力最大幅, webp品質 }
// ※コードから実際に参照されている画像のみ（未参照画像は配信されないため対象外）
const TARGETS = [
  // Before/After・症例（カード/本文 表示。retina考慮で1000px上限）
  { rel: "before-after/01_0.png", w: 1000, q: 80 },
  { rel: "before-after/02_0.png", w: 1000, q: 80 },
  { rel: "before-after/03_0.png", w: 1000, q: 80 },
  { rel: "before-after/04_0.png", w: 1000, q: 80 },
  { rel: "before-after/05_0.png", w: 1000, q: 80 },
  { rel: "before-after/20代女性.png", w: 1000, q: 80 },
  { rel: "before-after/20代女性02.png", w: 1000, q: 80 },
  { rel: "before-after/case-face-02.png", w: 1000, q: 80 },
  { rel: "before-after/case-face-03.png", w: 1000, q: 80 },
  { rel: "before-after/case-face-04.png", w: 1000, q: 80 },
  { rel: "before-after/case-face-05.png", w: 1000, q: 80 },
  // 歪み記事の習慣イラスト（本文表示 上限1000px）
  { rel: "yugami/スマホ長時間使用_0.png", w: 1000, q: 82 },
  { rel: "yugami/頬杖_0.png", w: 1000, q: 82 },
  { rel: "yugami/脚を組む_0.png", w: 1000, q: 82 },
  { rel: "yugami/歯ぎしり_0.png", w: 1000, q: 82 },
  { rel: "yugami/片方かみ_0.png", w: 1000, q: 82 },
  { rel: "yugami/片方でバックを持つ_0.png", w: 1000, q: 82 },
  { rel: "yugami/スマホテレビ姿勢_0.png", w: 1000, q: 82 },
  { rel: "yugami/うつぶせ寝_0.png", w: 1000, q: 82 },
  // 施術者ポートレート
  { rel: "therapist/therapist-portrait.png", w: 1000, q: 82 },
];

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function run() {
  console.log(APPLY ? "=== APPLY モード ===" : "=== DRY-RUN（--apply で実行）===\n");
  if (APPLY) await fs.mkdir(BACKUP, { recursive: true });

  let totalBefore = 0, totalAfter = 0, ok = 0, skip = 0;

  for (const t of TARGETS) {
    const src = path.join(PUB, t.rel);
    if (!(await exists(src))) { console.log(`SKIP (なし): ${t.rel}`); skip++; continue; }

    const buf = await fs.readFile(src);
    const meta = await sharp(buf).metadata();
    const beforeKB = Math.round(buf.length / 1024);
    totalBefore += buf.length;

    const targetW = Math.min(t.w, meta.width || t.w);
    const out = await sharp(buf)
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: t.q })
      .toBuffer();
    const afterKB = Math.round(out.length / 1024);
    totalAfter += out.length;

    const dst = src.replace(/\.png$/i, ".webp");
    console.log(
      `${t.rel}\n  ${meta.width}x${meta.height} ${beforeKB}KB(png) → ${targetW}px ${afterKB}KB(webp)  -${Math.round((1 - out.length / buf.length) * 100)}%`
    );

    if (APPLY) {
      // 元PNGをバックアップへ移動（参照は.webpへ切替えるため）
      const bdir = path.join(BACKUP, path.dirname(t.rel));
      await fs.mkdir(bdir, { recursive: true });
      await fs.copyFile(src, path.join(BACKUP, t.rel));
      await fs.writeFile(dst, out);
      await fs.unlink(src); // バックアップ済みなので元は削除（_original_pngに保全）
    }
    ok++;
  }

  console.log(`\n--- 合計 ---`);
  console.log(`対象: ${ok}件 / スキップ: ${skip}件`);
  console.log(`合計: ${Math.round(totalBefore / 1024)}KB → ${Math.round(totalAfter / 1024)}KB  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);
  if (!APPLY) console.log(`\n※ まだ変換していません。問題なければ --apply を付けて実行。`);
}

run().catch((e) => { console.error(e); process.exit(1); });
