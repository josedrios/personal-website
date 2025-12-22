import { getPaginatedPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import BlogAside from '@/components/BlogAside';

export default async function BlogPage({ params }) {
    const { page } = await params;
    const pageNumber = parseInt(page, 10);
    const { posts, totalPages } = await getPaginatedPosts(page, 5);

    return (
        <main id="blog-page">
            <BlogAside />
            <div className="content">
                <BlogList
                    posts={posts}
                    currentPage={pageNumber}
                    totalPages={totalPages}
                />
            </div>
        </main>
    );
}

