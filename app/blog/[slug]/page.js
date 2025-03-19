// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { parse } from 'rss-to-json';

async function getBlog(slug) {
  const res = await parse(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${personalData.MediumUserName}`)
  

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  console.log(data)
  return data;
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;