import { withRouter, SingletonRouter } from 'next/router';

import { Recipe } from '../components/Recipe';

interface Props {
  router?: SingletonRouter<{ id: string }>;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const recipeId = query ? query.id : 'GOOOFED';

  return <Recipe id={recipeId} />;
});

const Page = () => {
  return <Content />;
};

export default Page;
