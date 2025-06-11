import React from 'react';
import { ArticleHero } from '../sections/ArticleHero';
import { ArticleMeta } from '../sections/ArticleMeta';
import { ArticleActions } from '../sections/ArticleActions';
import { ArticleContent } from '../sections/ArticleContent';
import { ArticleTags } from '../sections/ArticleTags';
import { AuthorBio } from '../sections/AuthorBio';
import { RelatedArticles } from '../sections/RelatedArticles';
import { Article } from '../../utils/types/Article';

interface ArticlePageProps {
  article: Article;
  relatedArticles: Article[];
  onBack: () => void;
  onArticleClick: (article: Article) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  relatedArticles,
  onBack,
  onArticleClick
}) => {
  return (
    <>
      <ArticleHero article={article} onBack={onBack} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticleMeta article={article} />
        <ArticleActions article={article} />
        {/* <ArticleContent content={article.content} /> */}
        <ArticleTags tags={article.tags} />
        <AuthorBio article={article} />
        <RelatedArticles
          articles={relatedArticles}
          category={article.category}
          onArticleClick={onArticleClick}
        />
      </article>
    </>
  );
};
