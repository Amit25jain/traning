import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Online Course',
 
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PHP',
        path: '/php',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Javascript',
        path: '/javascript',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'React Js',
        path: '/react',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Offline Course',
 
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Html',
        path: '/html',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Css',
        path: '/css',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Bootstrap',
        path: '/bootstrap',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Service',
  
    icon: <FaIcons.FaDiscourse />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Video',
        path: '/video',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Picture',
        path: '/picture',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Admin Panel',
    path: '/admin',
    icon: <IoIcons.IoMdLock />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdContact />
  },
  {
    title: 'Address',
    path: '/address',
    icon: <IoIcons.IoMdLocate />
  }
  
];
