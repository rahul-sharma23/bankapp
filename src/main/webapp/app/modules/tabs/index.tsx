import { AdminMenu } from 'app/shared/layout/menus';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import {
  Row,
  Col,
  Alert,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText,
  Button,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isOpenAPIEnabled: boolean;
  currentLocale: string;
}

export interface MenuTypes {
  key: string;
  title: string;
  url: string;
  authTab?: boolean;
  adminTab?: boolean;
  childrens?: any;
}

export const NavTabs = (props: IHeaderProps) => {
  const { isAuthenticated, isAdmin, isOpenAPIEnabled } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('1');

  const userMenus = [
    {
      key: '2',
      title: 'Fund Transfer',
      url: '/transaction/new',
    },
    {
      key: '3',
      title: 'Create Account',
      url: '/bank-account/new',
    },
    {
      key: '4',
      title: 'Profile',
      url: '/customer',
    },
  ];

  const adminMenus = [
    {
      key: '5',
      title: 'Adminastration',
      url: '/admin',
      childrens: [
        {
          title: 'User Management',
          url: '/admin/user-management',
        },
        {
          title: 'Metrics',
          url: '/admin/metrics',
        },
        {
          title: 'Health',
          url: '/admin/health',
        },
        {
          title: 'Configuration',
          url: '/admin/configuration',
        },
        {
          title: 'Logs',
          url: '/admin/logs',
        },
      ],
    },
  ];

  const settingMenus = [
    {
      key: '6',
      title: 'Settings',
      url: '/account',
      childrens: [
        {
          title: 'Configuration',
          url: '/account/settings',
        },
        {
          title: 'Change Password',
          url: '/account/password',
        },
        {
          title: 'Sign out',
          url: '/logout',
        },
      ],
    },
  ];

  const accountMenus = [
    {
      key: '7',
      title: 'Account',
      url: '/login',
      childrens: [
        {
          title: 'Sign in',
          url: '/login',
        },
        {
          title: 'Register',
          url: '/account/register',
        },
      ],
    },
  ];

  const menus = useMemo(() => {
    let tabMenus: MenuTypes[] = [
      {
        key: '1',
        title: 'Home',
        authTab: false,
        adminTab: false,
        url: '/home',
      },
    ];

    if (isAuthenticated) {
      tabMenus.push(...userMenus);
    }

    if (isAdmin) {
      tabMenus.push(...adminMenus);
    }

    if (isAuthenticated) {
      tabMenus.push(...settingMenus);
    } else {
      tabMenus.push(...accountMenus);
    }

    return tabMenus;
  }, [isAuthenticated, isAdmin]);

  const handleMenu = menu => {
    setActiveKey(menu.key);
    navigate(menu.url === '/home' ? '/' : menu.url);
  };

  useEffect(() => {
    const tab = menus.find(t => location.pathname.includes(t.url));
    tab && setActiveKey(tab.key);
  }, [location.pathname]);

  return (
    <div>
      <Nav tabs>
        {menus?.map(menu =>
          menu?.childrens ? (
            <UncontrolledDropdown nav inNavbar key={menu.key}>
              <DropdownToggle nav caret className={activeKey === menu.key ? 'active' : ''}>
                {menu.title}
              </DropdownToggle>
              <DropdownMenu right>
                {menu?.childrens?.map(childMenu => (
                  <>
                    <DropdownItem onClick={() => handleMenu({ key: menu.key, url: childMenu.url })}>{childMenu?.title}</DropdownItem>
                  </>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <NavItem key={menu?.key}>
              <NavLink className={activeKey === menu?.key ? 'active' : ''} onClick={() => handleMenu(menu)}>
                {menu?.title}
              </NavLink>
            </NavItem>
          ),
        )}
      </Nav>
    </div>
  );
};
