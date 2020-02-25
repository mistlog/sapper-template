export default function Nav(props: { segment: string })
{
	const { segment } = props;

	<nav>
		<ul>
			<li><a aria-current={segment === undefined ? "page" : undefined} href='.'>home</a></li>
			<li><a aria-current={segment === "about" ? "page" : undefined} href='about'>about</a></li>
			<li><a rel="prefetch" aria-current={segment === "blog" ? "page" : undefined} href='blog'>blog</a></li>
		</ul>
	</nav>

}