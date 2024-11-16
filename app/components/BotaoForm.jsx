export default function BotaoForm({ children, tipo, form }) {
	return (
		<button type={tipo ? tipo : 'button'} form={form} className={`button`}>
			{children}
		</button>
	);
}