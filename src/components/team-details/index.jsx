import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import React from 'react';
import TeamDetailsArea from './team-details-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import HeaderTwo from '@/src/layout/headers/header-2';
import FooterTwo from '@/src/layout/footers/footer-2';

const TeamDetails = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="IT Advisor" page_title="Team Details" />
                <TeamDetailsArea />
                <FooterContact bg_style={true} />
            </main>
            <FooterTwo />
        </>
    );
};

export default TeamDetails;