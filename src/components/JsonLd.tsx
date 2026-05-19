/**
 * JSON-LD 構造化データを <script> として埋め込むコンポーネント
 * SSRで静的にレンダリングされるため、SEOクローラに即時認識される
 */

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
