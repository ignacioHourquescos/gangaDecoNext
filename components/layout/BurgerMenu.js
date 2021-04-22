import classes from './BurgerMenu.module.scss';
import DrawerToggleButton from './DrawerToggleButton'


const BurgerMenu = props => {
  	return (
    <header className={classes.toolbar}>
            <DrawerToggleButton click={props.drawerToggleClickHandler}/>
    </header>
  );
}

export default BurgerMenu;

