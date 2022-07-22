/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/*
import CC from './icons/cc_appicon_64.svg';
import XD from './icons/xd_appicon_64.svg';
import ST from './icons/st_appicon_64.svg';
import PS from './icons/ps_appicon_64.svg';
import LR from './icons/lr_appicon_64.svg';
import ID from './icons/id_appicon_64.svg';
import AI from './icons/ai_appicon_64.svg';
import PR from './icons/pr_appicon_64.svg';
import AE from './icons/ae_appicon_64.svg';
import BR from './icons/br_appicon_64.svg';
import AN from './icons/an_appicon_64.svg';
import AU from './icons/au_appicon_64.svg';
import DW from './icons/dw_appicon_64.svg';
import AF from './icons/adobe_fonts_appicon_darktile_32.svg';
import DC from './icons/dc_appicon_64.svg';
import AC from './icons/acrobat_standard_appicon_64.svg';
import AS from './icons/adobe_sign_appicon_64.svg';
import EC from './icons/ec_helpx_ontile_48.svg';
import EP from './icons/experience_platform_appicon_RGB_noshadow_64.svg';
import CA from './icons/camraw_SVG_256.svg';
*/

const clouds = [
  'Architecture Overviews',                   // 0
  'Data collection & Preparation',            // 1
  'B2B Activation & Marketing',               // 2
  'Customer Journey Analytics',               // 3
  'Customer Journeys',                        // 4
  'Data Analysis, Intelligence, & AI/ML',     // 5
  'Web & Mobile Personalization'              // 6
];

// Important: lastUpdated date should be unique to ensure stable sort across browsers
const products = [
  {
    id: 0,
    name: 'Experience Cloud',
    description: 'Illustrates how the Adobe Experience Cloud applications are connected and integrated wit eachother via the Experience Platform to achieve personalization at scale across data, content, and experience delivery.',
    discover: '/blueprints/overview/experience-cloud.md',
    docs: false,
    lastUpdated: '2022',
    cloud: clouds[0]
  },
  {
    id: 0,
    name: 'Experience Platform & Apps',
    description: 'A view into how Adobe Experience Platform is built natively plug n\' play application services and integrates with other Experience Cloud applications.',
    icon: '',
    discover: '/blueprints/overview/platform-apps.md',
    docs: false,
    lastUpdated: '2022',
    cloud: clouds[0]
  },
  {
    id: 0,
    name: 'Experience Platform - Data Flows',
    description: 'Provides insight into the various architectural patterns for ingesting and exporting data with Adobe Experience Platform.',
    icon: '',
    discover: '/blueprints/overview/platform-data-flows.md',
    docs: false,
    lastUpdated: '2022',
    cloud: clouds[0]
  },
  {
    id: 0,
    name: 'Audience Manager',
    description: 'Adobe Creative Cloud APIs and SDKs enable developers to impact creative work for millions of users worldwide. Build and distribute inspiring, productivity-driving plugins and integrations—all with Adobe Creative Cloud.',
    icon: '',
    discover: '/creative-cloud',
    docs: false,
    lastUpdated: '2020',
    cloud: clouds[6]
  },
  {
    id: 0,
    name: 'Adobe Target',
    description: 'Adobe Creative Cloud APIs and SDKs enable developers to impact creative work for millions of users worldwide. Build and distribute inspiring, productivity-driving plugins and integrations—all with Adobe Creative Cloud.',
    icon: '',
    discover: '/creative-cloud',
    docs: false,
    lastUpdated: '2020',
    cloud: clouds[6]
  },
  {
    id: 0,
    name: 'Adobe Target',
    description: 'Adobe Creative Cloud APIs and SDKs enable developers to impact creative work for millions of users worldwide. Build and distribute inspiring, productivity-driving plugins and integrations—all with Adobe Creative Cloud.',
    icon: '',
    discover: '/creative-cloud',
    docs: false,
    lastUpdated: '2020',
    cloud: clouds[6]
  },
  {
    id: 0,
    name: 'Adobe Target',
    description: 'Adobe Creative Cloud APIs and SDKs enable developers to impact creative work for millions of users worldwide. Build and distribute inspiring, productivity-driving plugins and integrations—all with Adobe Creative Cloud.',
    icon: '',
    discover: '/creative-cloud',
    docs: false,
    lastUpdated: '2020',
    cloud: clouds[6]
  },
  {
    id: 0,
    name: 'Adobe Target',
    description: 'Adobe Creative Cloud APIs and SDKs enable developers to impact creative work for millions of users worldwide. Build and distribute inspiring, productivity-driving plugins and integrations—all with Adobe Creative Cloud.',
    icon: '',
    discover: '/creative-cloud',
    docs: false,
    lastUpdated: '2020',
    cloud: clouds[6]
  },            
];

export {clouds, products};