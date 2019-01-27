import { withRouter, SingletonRouter } from 'next/router';

import { EditRecipe } from '../components/Recipe';

interface Props {
  router?: SingletonRouter<{ id: string }>;
}

const Content = withRouter((props: Props) => {
  const query = props.router && props.router.query;
  const recipeId = query ? query.id : 'GOOOFED';

  return <EditRecipe id={recipeId} />;
});

const Page = () => {
  return <Content />;
};

export default Page;
