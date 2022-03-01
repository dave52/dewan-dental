import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import blockContentImage from './blockContentImage';
import community from './community';
import communityGroups from './communityGroups';
import communityImages from './communityImages';
import communityPartners from './communityPartners';
import contactInfo from './contactInfo';
import contactInfoHours from './contactInfoHours';
import navigation from './navigation';
import navigationGrandchildNav from './navigationGrandchildNav';
import navigationChildNav from './navigationChildNav';
import page from './page';
import team from './team';
import teamBio from './teamBio';
import testimonials from './testimonials';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    blockContentImage,
    community,
    communityGroups,
    communityImages,
    communityPartners,
    contactInfo,
    contactInfoHours,
    navigation,
    navigationChildNav,
    navigationGrandchildNav,
    page,
    team,
    teamBio,
    testimonials,
  ]),
});
