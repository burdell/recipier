import { withRouter, NextRouter } from 'next/router';

import { EditRecipe } from '../../components/Recipe';

interface Props {
  router?: NextRouter;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const recipeId: string = query ? (query.id as string) : 'GOOOFED';

  return <EditRecipe id={recipeId} />;
});

const Page = () => {
  return <Content />;
};

export default Page;
