import { Field, Form, Formik } from 'formik';
import React from 'react';
import { MenuItemRequest } from '../models/menu-item.request';
import { addMenuItem } from '../menu-items.api';
import { useRouting } from '../../routing';
import { MENU_ITEMS_URLS } from '../urls';
import { authHeader } from '../../auth/helpers/auth-header';
import { MenuItemTypes } from '../models/menu-item-types';

const initialValues: MenuItemRequest = {
  name: '',
  type: 0,
  link: '',
};

export function AddMenuItem() {
  const { routeTo } = useRouting();
  console.log(authHeader());

  const onSubmit = async (menuItem: MenuItemRequest) => {
    await addMenuItem(menuItem);
    routeTo(MENU_ITEMS_URLS.menuItems);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <Form className="Form">
              <span className="title">Add menu item</span>
              <input
                type="text"
                name="name"
                placeholder="Enter menu item name"
                onChange={handleChange}
              />
              {/* <input */}
              {/*  type="number" */}
              {/*  name="type" */}
              {/*  placeholder="Enter menu item type" */}
              {/*  onChange={handleChange} */}
              {/* /> */}
              <Field name="type" as="select">
                {Object.entries(MenuItemTypes).map(([type, verbose]) => (
                  <option value={type}>{verbose}</option>
                ))}
              </Field>
              <input
                type="string"
                name="link"
                placeholder="Enter menu item link"
                onChange={handleChange}
              />
              <button type="submit">Add</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
