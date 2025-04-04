import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MaichimpForm = () => {
    const postUrl = `$(process.env.MAILCHIMP_URL)?u=$(process.env.MAILCHIMP_U)&id=$(process.env.MAILCHIMP_ID)`;
    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)} 
                    />
                )}
            />
        </>
    )
}