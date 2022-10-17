import React from 'react';
import {Avatar, Badge, Box, Divider, Grid, IconButton, Typography} from '@mui/material';
import {User} from '../../../../core/services/UserService/types';
import {iconConverter} from '../../../utils/iconConverter';
import {Icon} from '../../../constants';

type Props = {
	user: User
}

function Header(props: Props) {
	const { name, avatar } = props.user;

	return (
		<Box>
			<Grid container justifyContent={'space-between'}>
				<Grid md={4}>
					<Box p={3}>{'Awesome logo'}</Box>
				</Grid>
				<Grid md={8}>
					<Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} pr={4}>
						<IconButton>{ iconConverter(Icon.email) }</IconButton>
						<IconButton>
							<Badge badgeContent={1} color={'primary'}>
								{ iconConverter(Icon.notification) }
							</Badge>
						</IconButton>
						<Box p={2} display={'flex'} alignItems={'center'}>
							<Avatar src={avatar}/>
							<Box ml={2}>
								<Typography>{name}</Typography>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Divider />
		</Box>
	);
}

export default React.memo(Header);