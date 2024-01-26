import ArticlePreviewList from '@/app/_components/articlePreviewList';
import type { ArticlePreview as ArticlePreviewI } from '@/app/_interfaces/api';

interface Props{
  publishedArticles: ArticlePreviewI[]
}

const ProfileArticles: React.FC<Props> = ({ publishedArticles }) => {
  return (
    <ArticlePreviewList articleList={publishedArticles} />
  );
}

export default ProfileArticles