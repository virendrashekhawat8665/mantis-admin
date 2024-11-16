import { FormattedMessage } from 'react-intl';
import {
  CalendarOutlined,
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  AudioOutlined,
  TagOutlined,
  DisconnectOutlined,
  BellOutlined,
  MediumOutlined,
  AccountBookOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  KeyOutlined,
  DollarOutlined,
  AlignLeftOutlined,
  BookOutlined,
  ProfileOutlined,
  PieChartOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  RocketOutlined,
  TagsOutlined,
  FormOutlined,
  DiffOutlined
} from '@ant-design/icons';
import { NavItemType } from '../types/menu';
// import { useSelector } from 'react-redux';
// import { selectStaffPermishion } from 'sections/auth/redux/selector';

const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  AudioOutlined,
  TagOutlined,
  DisconnectOutlined,
  BellOutlined,
  MediumOutlined,
  AccountBookOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  KeyOutlined,
  DollarOutlined,
  AlignLeftOutlined,
  BookOutlined,
  ProfileOutlined,
  PieChartOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  RocketOutlined,
  TagsOutlined,
  FormOutlined,
  DiffOutlined
};

const custom: NavItemType = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    // {
    //   id: 'contact-Us',
    //   title: <FormattedMessage id="Contact-us" />,
    //   type: 'collapse',
    //   icon: icons.ProfileOutlined,
    //   children: [
    //     {
    //       id: 'allBlog',
    //       title: <FormattedMessage id="All Blog" />,
    //       type: 'item',
    //       url: '/bloglist/list'
    //     }
    //   ]
    // },
    {
      id: 'blog-category',
      title: <FormattedMessage id="Blog Category" />,
      type: 'item',
      icon: icons.DiffOutlined,
      url: '/blog-category/list'
    },
    {
      id: 'blog',
      title: <FormattedMessage id="Blogs" />,
      type: 'item',
      icon: icons.FormOutlined,
      url: '/blog/list'
    },
    {
      id: 'career-list',
      title: <FormattedMessage id="Career List" />,
      type: 'item',
      icon: icons.InfoCircleOutlined,
      url: '/career/list'
    },
    {
      id: 'enquiry-data',
      title: <FormattedMessage id="Enquiry List" />,
      type: 'item',
      icon: icons.InfoCircleOutlined,
      url: '/enquiry/list'
    },
    {
      id: 'email-news-list',
      title: <FormattedMessage id="Email News List" />,
      type: 'item',
      icon: icons.RocketOutlined,
      url: '/email-news/list'
    },
    {
      id: 'faq-list',
      title: <FormattedMessage id="Faq List" />,
      type: 'item',
      icon: icons.QuestionCircleOutlined,
      url: '/faq/list'
    },
    {
      id: 'policy',
      title: <FormattedMessage id="Policy" />,
      type: 'item',
      icon: icons.QuestionCircleOutlined,
      url: '/policy'
    },
  ]
};

export default custom;
