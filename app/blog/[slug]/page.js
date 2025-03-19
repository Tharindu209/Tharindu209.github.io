// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

export async function generateStaticParams() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  const blogs = await res.json();

  return blogs.map(blog => ({
    slug: blog.slug
  }));
}

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;