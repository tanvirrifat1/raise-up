
import { getServerSession } from 'next-auth';
import { UpdateProfile } from '../../../../../components/ui/user-profile/actions'
import { options } from '../../../../api/auth/[...nextauth]/options';
import { getSingleAffiliateUser } from '../../../../../utils/affiliateUser'

const UpdateProfilepage = async () => {
    const session = await getServerSession(options)

    const id = session?.user?.bizid

    const user = await getSingleAffiliateUser(id);

    return (
        <div>

            <UpdateProfile user={user} />
        </div>
    )
}

export default UpdateProfilepage