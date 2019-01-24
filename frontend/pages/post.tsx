import { withRouter, SingletonRouter } from 'next/router';

import { Layout } from '../components/Layout';

interface Props {
  router?: SingletonRouter<{ title: string }>;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const title = query ? query.title : 'Post Title';

  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
});

const Page = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Page;
