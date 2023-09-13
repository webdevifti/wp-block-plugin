<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_practice_blockeditor' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',kUFb8YO}hE5aJ@S8[NE~MV[9#+CVRbdu,sMqzWQ%DzZlNH6=@OYlEf`D.o8pGWd' );
define( 'SECURE_AUTH_KEY',  'EbgY]mnNO=9;,Wg;yX,$v0Y=X G_](|J7I%wF1t)o@29>`-^9kXaZSz#J1 R?y)`' );
define( 'LOGGED_IN_KEY',    'lC[y5j(;P)Sq.SwN) @2W5t7XCd)}m3L9 2w1%8WC wbm<8zkb7=&}& Ec&sOq:O' );
define( 'NONCE_KEY',        'Vj*7u8{^tRnuq{XIPS}!{Fe4)6~z~10yG`X@?hW~vSn9E]kb?,CQTI~:509]`A:&' );
define( 'AUTH_SALT',        '.zCQxf#/0ov?doVm8}y;~gO5_/gKES+?qk${OnvZ]Rh`?65addF$k@CHc:a:rQj=' );
define( 'SECURE_AUTH_SALT', 'msuu_AIosyH%bMw3@>Z?#4jUC!ybmog!mGn;:BAOgB?>t2&IH67kfK=`.]Efx:)I' );
define( 'LOGGED_IN_SALT',   ';a3rr{=*PN;*DG4_|F(HpJ+kMa(o#3mNEF*M-@`vwsZx{x:N$2I]m/M=@])(f9)w' );
define( 'NONCE_SALT',       '<jd4hX5Qb?#JWNWStYIs_YHs=_>k_&>%Xl8;=b(zM4|G_z[Pph5mU]R@kI Q]TUL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
