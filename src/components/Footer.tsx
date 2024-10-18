import { Facebook } from "lucide-react";

const Footer = () => {
	return (
		<footer className='md:px-8 md:py-0 border-t bg-[#dadadaa6] bottom-0 w-full'>
			<div className='container flex  items-center gap-4 h-24'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://www.facebook.com/profile.php?id=100029526606236'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						Wael Latrache
					</a>
					
					<a
						href='https://www.facebook.com/profile.php?id=100029526606236'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					> <Facebook /></a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
