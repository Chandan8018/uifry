import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  TextInput,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsFire,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Button} from "./ui/moving-border";

function FooterComp() {
  return (
    <Footer container className="dark:bg-[#121212]">
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          
          <div className='grid grid-cols-2 md:gap-0 sm:mt-4 md:grid-cols-5 gap-6 '>
            <div className="flex flex-col gap-6 mt-2">
          <div className='flex justify-start items-center'>
            <BsFire className='h-7 w-7 text-[#ff5555]' />
            <span className='text-xl font-semibold dark:text-white'>
              uifry™
            </span>
          </div>
          <span className='flex justify-start items-center gap-1 text-sm font-semibold'>
            <IoMdMail className='w-6 h-6 text-[#ff5555]' /> Help@Frybix.Com
          </span>
          <span className='flex justify-start items-center gap-1 text-sm font-semibold'>
            <IoCall className='w-6 h-6 text-[#ff5555]' /> +1234&nbsp;456&nbsp;67889
          </span>
          </div>
            <div>
              <FooterTitle title='Links' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Home</FooterLink>
                <FooterLink href='#'>About Us</FooterLink>
                <FooterLink href='#'>Bookings</FooterLink>
                <FooterLink href='#'>Blogs</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title='Legal' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Terms Of Use</FooterLink>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Cookie Policy</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title='Product' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Take Tour</FooterLink>
                <FooterLink href='#'>Live Chat</FooterLink>
                <FooterLink href='#'>Reveiws</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title='Newsletter' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Stay Up To Date</FooterLink>
                <FooterLink href='#'>
                  <div className='flex justify-start items-center'>
                    <TextInput
                      placeholder='Your email'
                      className='rounded-none'
                    />
                    <Button
                      borderRadius="4px"
        className="bg-black text-white border-slate-800 rounded-[3px]"
                    >
                      Subscribe
                    </Button>
                  </div>
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className='w-full flex items-center justify-center'>
          <FooterCopyright href='#' by='Uifry.Com All Rights Reserved™' year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;
