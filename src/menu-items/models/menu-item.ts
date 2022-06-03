import { CreatedUpdatedEntity } from '../../models/created-updated-entity';
import { MenuItemRequest } from './menu-item.request';

export interface MenuItem extends MenuItemRequest, CreatedUpdatedEntity {}
