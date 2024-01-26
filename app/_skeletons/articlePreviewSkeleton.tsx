import '@/styles/components/skeletons.scss'

const ArticlePreviewSkeleton = () => {
  return (
    <li className="skeleton--article-prev-card">
      <div className="skeleton--article-prev-img">
        <img />
      </div>

      <div className="skeleton--article-prev-text-box">
        <div className="title"></div>
        <div className="resume"></div>

        <div className="skeleton--article-prev-footer">
          <div className="skeleton--article-prev-author">
            <div className="author-picture"></div>

            <div className="skeleton--article-prev-author__info">
              <div className="author-name"></div>

              <div className="publish"></div>
            </div>
          </div>

          <div className="button"></div>
        </div>
      </div>

      <div></div>
    </li>
  );
}

export default ArticlePreviewSkeleton