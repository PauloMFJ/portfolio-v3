type Props = {
	code: string;
	message: string;
};

export const PageError = ({ code, message }: Props) => {
	return (
		<main>
			<h1>{code}</h1>
			<p>{message}</p>
		</main>
	);
};
