import { withRouter, SingletonRouter } from 'next/router';

interface Props {
  router?: SingletonRouter<{ title: string }>;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const title = query ? query.title : 'Post Title';

  return (
    <div>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
});

const Page = () => {
  return <Content />;
};

export default Page;
