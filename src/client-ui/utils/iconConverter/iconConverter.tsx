import React, {JSXElementConstructor} from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListIcon from '@mui/icons-material/List';
import TimelineIcon from '@mui/icons-material/Timeline';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { Icon } from '../../constants';

type Props = {[key: string]: any}

const ICONS: {[key: string]: JSXElementConstructor<Props>} = {
    plus: AddOutlinedIcon,
    email: MailOutlineIcon,
    thermostat: ThermostatIcon,
    notification: NotificationsNoneOutlinedIcon,
    dashboard: DashboardIcon,
    orders: ListIcon,
    messages: MessageIcon,
    analysis: TimelineIcon,
    calendar: CalendarTodayIcon,
    settings: SettingsIcon,
}

function iconConverter(iconName: Icon, props: Props = {}): JSX.Element | null {
    const Icon = ICONS[iconName];
    return Icon ? <Icon {...props} /> : null;
}

export default iconConverter;