import { iconConverter } from '../../../utils/iconConverter';
import { Icon } from '../../../constants';

export type MenuItem = {
	title: string,
	icon: JSX.Element | null,
}

export const MENU_ITEMS = [
	'Dashboard', 'Orders', 'Messages',
	'Analysis', 'Calendar', 'Settings'
].map((item) => ({
	icon: iconConverter(`${item.charAt(0).toLowerCase()}${item.slice(1)}` as Icon),
	title: item,
}));