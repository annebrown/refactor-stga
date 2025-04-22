<!--------@/pages/action.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<!-- Flex -->
<div class="flex-col columns-1 xs:columns-2 sm:columns-3 gap-x-4 gap-y-8
    bg-(--ui-bg) rounded-xl">
        
    <!-- PETITION -->
    <div class="action-card">

        <h2 class="card-heading">
            SIGN THE PETITION
        </h2>

        <p class="stga-card-p">
            Sign our <ULink to="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120">online petition</ULink> if you haven&apos;t already. Please note, if you have already signed the hard-copy petition do not sign the online version.
        </p>

        <!-- WARNING -->
        <div class="p-2 bg-(--ui-primary-2) text-xs mt-2 rounded-lg">
            <p class="font-bold pb-0 mb-0.5">
                WARNING
            </p>
            <p>
                Donations to change.org DO NOT go towards our cause.  For donations to STGA, please use Interac E-Transfer to:
            </p>
            <p class="p-0.5 m-0.5 mt-1.5 text-center">
                <span class="bg-(--ui-bg) p-2  rounded-lg">
                    <ULink to="mailto:savethegroveagain@gmail.com">
                        savethegroveagain@gmail.com
                    </ULink>
                </span>
            </p>
        </div>
    </div><!-- PETITION -->

    <!-- SPREAD THE WORD -->
    <div class="action-card">
        <h2 class="card-heading">
            SPREAD THE WORD
        </h2>
        <p class="stga-card-p">
            Your word is powerful! Talk to your friends, family and neighbors about what is happening and how you feel about it.  Buttons are available by donation at Green Bean Natural Foods or by request at <ULink to="mailto:savethegroveagain@gmail.com">savethegroveagain@gmail.com</ULink>.  Wear it proud to show your support!
        </p>
    </div>

    <!-- LIKE -->
    <div class="action-card">
        <h2 class="card-heading">
            LIKE AND FOLLOW US ON SOCIAL MEDIA
        </h2>
        <p class="stga-card-p">
            Follow us on <ULink to="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/">Facebook</ULink>, <ULink to="https://www.instagram.com/savethegroveagain2024/">Instagram</ULink> and <ULink to="https://www.youtube.com/@SaveTheGroveAgain/featured">YouTube</ULink> . Adding a like and a comment on our posts really helps the cause. And of course, please share it too so we can get the word out!
        </p>
    </div>

    <!-- STAY INFORMED -->
    <div class="action-card">
        <h2 class="card-heading">
            STAY INFORMED
        </h2>
        <p class="stga-card-p">
            To receive the latest updates, announcements, events, and media coverage, subscribe to our <ULink to="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</ULink>.
        </p>
    </div>

    <!-- VOLUNTEER -->
    <div class="action-card">
        <h2 class="card-heading">
            VOLUNTEER
        </h2>
        <p class="stga-card-p">
            We have set up a volunteer form. If you would like to offer your help please take a few minutes to fill in the <ULink to="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link">form</ULink>.
        </p>
    </div>

    <!-- MAKE A DONATION -->
    <div class="action-card">
        <h2 class="card-heading">
            MAKE A DONATION
        </h2>
        <p class="stga-card-p">
            Donations are used to cover the cost of materials including lawn signs, flyers, posters, buttons, website domain name etc. For those wanting to make a donation, please direct your Interac E-Transfer to: 
        </p>
        <p class="bg-(--ui-bg) m-1 p-2 rounded-lg text-sm">
            <ULink to="mailto:savethegroveagain@gmail.com">
                savethegroveagain@gmail.com
            </ULink>
        </p>
        <p>
            Please share that information with others who may want to contribute.             
        </p>
    </div>

</div><!-- Flex -->


<!-- Speak Out -->
<div class="action-card mt-5">

    <div class="w-full p-5 text-center">

        <h2 class="text-3xl py-10 font-extrabold text-center">
            SPEAK OUT!
        </h2>
        <p class="pb-8">
            Let&quot;s not underestimate the power of community. 
        </p>
        <p class="pb-8">
            Below you will find contact information for the parties involved in the sale of this land, as well as contacts for all levels of government. We urge anyone who opposes the development of adjacent land to Gillies Grove to call or email these parties and get your voice heard! 
        </p>
        <p class="pb-8">
            Please find below some optional templates to assist you in writing an email to Galilee Center, OMI Lacombe, Cavangh Construction and various elected officials. 
        </p>
    </div>

    <h2 class="mt-5 text-3xl font-bold text-center pb-10">
        List of Contacts
    </h2>

    <!-- Contacts -->
    <div class="rounded-lg grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 h-full ">

        <div class="rounded-lg w-full bg-(--ui-bg) p-5">
            <p class="text-wrap">
                <ULink to="https://www.omilacombe.ca" class="text-(--ui-primary)">
                    <strong>Missionary Oblates of Mary Immaculate Lacombe Canada</strong>
                </ULink><br/>
                <ULink to="https://www.omilacombe.ca" >
                    www.omilacombe.ca
                </ULink><br/>
                Attention: Provincial Council members<br/>
                <ULink to="mailto:information@omilacombe.ca">
                    information@omilacombe.ca<br/>
                </ULink>
                <ULink to="tel:6132302225">(613)230-2225</ULink><br/>
            </p>
        </div>
        <div class="rounded-lg w-full bg-(--ui-bg) p-5">
            <p class="text-wrap">
                <ULink to="https://www.galileecentre.com" class="text-(--ui-primary)">
                    <strong>Galilee Centre</strong>
                </ULink><br/>
                <ULink to="https://www.galileecentre.com" >
                    www.galileecentre.com
                </ULink><br/>
                Board President: David Perrin<br/>
                <ULink to="mailto:communications@galileecentre.com">
                    communications@galileecentre.com
                </ULink><br/>
            </p>
        </div>

        <div class="rounded-lg w-full bg-(--ui-bg) p-5">
            <p class="text-wrap">
                <ULink to="https://www.thomascavanagh.ca" class="text-(--ui-primary)">
                    <strong>Thomas Cavanagh Construction Limited (Cavanagh Communities)</strong>
                </ULink><br/>
                <ULink to="https://www.thomascavanagh.ca" >
                    www.thomascavanagh.ca
                </ULink><br/>
                Owner: Jeff Cavanagh<br/>
                Contact: Pierre Dufresne<br/>
                <ULink to="mailto:pdufresne@thomascavanagh.ca">
                    pdufresne@thomascavanagh.ca<br/>
                </ULink>
                <ULink to="tel:6132572918">(613)257-2918</ULink><br/>
            </p>
        </div>

    </div><!-- Contacts -->

    <!-- Town of Arnprior -->
    <div class="p-10">
    
        <h1 class="mb-0 text-3xl font-bold text-center pb-2 center">
            <ULink to="https://www.arnprior.ca/en/town-hall/contact-us.aspx?_mid_=7524" class="text-(--ui-primary)">
                <strong>Town of Arnprior</strong>
            </ULink><br/>
        </h1>
        <p class="text-center pt-0 mt-0 underline">
            <ULink to="https://www.arnprior.ca/en/town-hall/contact-us.aspx?_mid_=7524">
                    www.arnprior.ca
            </ULink>
        </p>

        <div class="mt-10 rounded-lg grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 h-full ">
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Mayor: Lisa McGee<br/>
                <ULink to="mailto:lmcgee@arnprior.ca">
                    lmcgee@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:​6133220271">(613)​322-0271</ULink><br/>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                County Councillor: Dan Lynch<br/>
                <ULink to="mailto:dlynch@arnprior.ca">
                    dlynch@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6136230146">(613)623-0146</ULink><br/>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Councillor: Chris Toner<br/>
                <ULink to="mailto:ctoner@arnprior.ca">
                    ctoner@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6139139571">(613)913-9571</ULink><br/>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Councillor: Ted Strike<br/>
                <ULink to="mailto:tstrike@arnprior.ca">
                    tstrike@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6136015651">(613)601-5651</ULink><br/>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Councillor: Chris Cooper<br/>
                <ULink to="mailto:ccouper@arnprior.ca">
                    ccouper@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6135184081">(613)518-4081</ULink>
                <br/>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Councillor: Tom Burnette<br/>
                <ULink to="mailto:tburnette@arnprior.ca">
                    tburnette@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6136235630">(613)623-5630</ULink>
            </div>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                Councillor: Lynn Cloutier<br/>
                <ULink to="mailto:lcloutier@arnprior.ca">
                    lcloutier@arnprior.ca<br/>
                </ULink>
                <ULink to="tel:6133716036">(613)371-6036</ULink><br/>
            </div>
        </div>
    </div> <!-- Town of Arnprior -->

        
    <div class="text-center">

        <!-- Legislative Assembly of Ontario -->
        <div class="px-10 my-0">
            <h2 class="pt-5 mt-0 pb-5 mb-0 text-3xl font-bold text-center center">
                <ULink to="https://www.arnprior.ca/en/town-hall/contact-us.aspx?_mid_=7524">
                    <strong>Legislative Assembly of Ontario</strong>
                </ULink><br/>
            </h2>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                <p class="text-wrap">
                    Billy Denault<br/>
                    <ULink to="tel:6137356627" >
                        613-735-6627
                    </ULink><br/>
                    <ULink to="mailto:billy.denault@pc.ola.org">
                        billy.denault@pc.ola.org<br/>
                    </ULink>
                </p>
            </div>
        </div><!-- Legislative Assembly of Ontario -->

        <!-- Member of Parliament -->
        <div class="p-10 my-0">
            <h2 class="pt-0 mt-0 mb-5 text-3xl font-bold text-center center">
                <ULink to="https://www.arnprior.ca/en/town-hall/contact-us.aspx?_mid_=7524">
                    <strong>Member of Parliament</strong>
                </ULink><br/>
            </h2>
            <div class="rounded-lg w-full bg-(--ui-bg) p-5">
                <p class="text-wrap center">
                    <ULink to="http://cherylgallant.com">
                    cherylgallant.com
                    </ULink><br/>
                    Cheryl Gallant<br/>
                    <ULink to="mailto:cheryl.gallant@parl.gc.ca">
                        cheryl.gallant@parl.gc.ca<br/>
                    </ULink>
                </p>
            </div>
        </div><!-- Member of Parliament -->

    </div>
</div><!-- Speak Out -->

<div>
    <div class="w-full p-5 mt-5 text-center">

        <p class="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            There was a request at the community gathering last Saturday that we provide form letters. We feel it is important for these parties to hear from individuals, plus we can&apos;t speak for each of you.  Consequently, we have compiled some information to assist you in writing your own letters:
        </p>

        <h3 class="text-xl font-bold pb-3">
            Thomas Cavanaugh Construction
        </h3>
        <p class="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            In writing to Cavanagh we suggest that you address the concerns about the health and longevity of the Grove and that you impress the rarity of this old growth ecosystem. Please also include any personal reasons that you oppose them purchasing this land to develop. 
        </p>

        <h3 class="text-xl font-bold pb-3">
            Galilee Centre
        </h3>
        <p class="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            <ULink to="https://docs.google.com/document/d/1WkPekfrC49DgsMQOYiMMg8P-Z5KT_9SbPdYENNX_64w/edit">
                Support Information for Letters to Galilee Centre Board of Directors
            </ULink>
        </p>

        <h3 class="text-xl font-bold pb-3">
            Missionary Oblates of Mary Immaculate Lacombe Canada
        </h3>
        <p class="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            <ULink to="https://docs.google.com/document/d/1bSmjknFCd_sO5M1RSTaaCbwrJzcRRvrxx7oLjxlYimQ/edit">
                Support Information for Letters to OMI Lacombe Provincial Council
            </ULink>
        </p>

        <p class="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">   
            Additional 
                <ULink to="https://docs.google.com/document/d/1RxpQHeKJCeBm7pLh7X_LhudDXYBPwd4ta3epOikFq7Y/edit?usp=sharing">
                    TEMPLATE/EXAMPLE LETTERS
                </ULink>
            have been provided by a community member for letters to Lacombe, Galilee Centre, Cavanagh, Mayor McGee and Billy Denault, Legislative Assembly of Ontario.
        </p>

    </div>


</div>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Get Involved!', 
    })
</script>
<!--------@/pages/action.vue--------------------------------------------------->