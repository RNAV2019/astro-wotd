import type { SVGProps } from "react";

export function Speaker(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				d='M9 15H6q-.425 0-.712-.288T5 14v-4q0-.425.288-.712T6 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T12.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.512.013T16 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2'
			></path>
		</svg>
	);
}
