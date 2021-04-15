import Link from 'next/link';
import classes from './BurgerMenu.module.scss';
import DrawerToggleButton from './DrawerToggleButton'


const BurgerMenu = props => {
  return (
    <header className={classes.toolbar}>
        <nav className={classes.toolbar_navigation}>
            <div>
                <DrawerToggleButton click={props.drawerToggleClickHandler}/>
            </div>
            {/* <div className={classes.toolbar_logo}>
                <Link  href="/">LOGOOO</Link>
            </div> */}
            <div className={classes.spacer}></div>
            <div className={classes.toolbar_navigation_items}>
                <ul>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/aboutUs">users</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default BurgerMenu;

