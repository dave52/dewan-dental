import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import team from './team';
import page from './page';
import blockContent from './blockContent';
import blockContentImage from './blockContentImage';
import navigation from './navigation';
import navigationGrandchildNav from './navigationGrandchildNav';
import navigationChildNav from './navigationChildNav';
import teamBio from './teamBio';
import testimonials from './testimonials';
import community from './community';
import communityImages from './communityImages';
import communityPartners from './communityPartners';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    blockContentImage,
    community,
    communityImages,
    communityPartners,
    navigation,
    navigationChildNav,
    navigationGrandchildNav,
    page,
    team,
    teamBio,
    testimonials,
  ]),
});
