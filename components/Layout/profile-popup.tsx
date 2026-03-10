import { signout } from '@/actions/auth'
import useUser from '@/store/user'
import { CallOutlined, CloseOutlined, Logout, MailOutline } from '@mui/icons-material'
import { Divider } from '@mui/joy'
import { ClickAwayListener } from '@mui/material'
import Form from 'next/form'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    setShow: (val: boolean) => void;
}

function ProfilePopup({ setShow }: Props) {
    const user = useUser(state => state.user)

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
        <div className='absolute overflow-hidden z-50 w-140.5 h-auto bg-background-sidebar top-11 right-3 gradient-border backdrop-blur-[20px] shadow-[0_2px_26px_0_#000000]/50 rounded-xl'>
            <div className='w-full h-full relative p-8'>
                {/* <div style={{backgroundColor: 'red', width: 100, height: 60, borderRadius: '300px !important'}}></div> */}
                <div className='absolute -z-10 -top-17 -start-15.25 w-171.25 h-60.5 rounded-[50%] bg-linear-to-r from-gradient-primary to-gradient-secondary'></div>
                <CloseOutlined fontSize='medium' className='absolute cursor-pointer top-3.5 right-3.5' onClick={() => setShow(false)} />
                <div className='flex flex-col gap-6 z-10 items-center mt-17'>
                    <Image src={user?.profilePicture ? user.profilePicture : '/assets/avatar-lg.jpg'} alt='avatar' width={123} height={123} className='rounded-full overflow-hidden w-30.75 h-30.75 object-cover shadow-[0_2px_10px_0_#000000]/50' />
                    <div className='flex flex-col gap-3 items-center'>
                        <p className='text-xl font-medium text-text-secondary text-center'>{user?.name} {user?.lastName}</p>
                        <Form action={signout}>
                            <button className='cursor-pointer flex gap-1'>
                                <Logout fontSize='small' />
                                <p className='text-sm font-medium text-center'>Sign Out</p>
                            </button>
                        </Form>
                    </div>
                    <div className='bg-camera-pill w-full px-8 py-6 flex flex-col gap-6 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1 items-center'>
                                <MailOutline fontSize='small' />
                                <p>{user?.mailId}</p>
                            </div>
                            <Link href={'#'} className='text-xs font-medium uppercase' >Change Password</Link>
                        </div>
                        <Divider />
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CallOutlined fontSize='small' />
                                <p>{user?.mobile}</p>
                            </div>
                            <Link href={'#'} className='text-xs font-medium uppercase' >Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ClickAwayListener>
  )
}

export default ProfilePopup