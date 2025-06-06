import type { ReactNode } from "react";
import { domMax, LazyMotion } from "motion/react";

import "~/styles/core.scss";

type Props = {
	children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
	<html lang="en">
		<body>
			<LazyMotion strict features={domMax}>
				{children}
			</LazyMotion>
		</body>
	</html>
);

export default RootLayout;
