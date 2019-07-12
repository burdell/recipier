import { withRouter, NextRouter } from 'next/router';

import { Recipe } from '../../components/Recipe';

interface Props {
  router?: NextRouter;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const recipeId = query ? (query.id as string) : 'GOOOFED';

  return <Recipe id={recipeId} />;
});

const Page = () => {
  return <Content />;
};

export default Page;
