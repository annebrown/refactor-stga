<!--------@@/base/components/img/SocialIcons.vue------------------------------->
<template><div>

<UButtonGroup 
    class="gap-0.75" 
    variant="link"
>

    <!-- Email -->
    <UButton 
        to="mailto:savethegroveagain@gmail.com" 
        variant="link"
        aria-label="social-link"
        target="_blank"
        class="socials" 
        rel="noopener noreferrer"
    >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" height="18" 
            viewBox="0 0 24 24">
            <path d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"/>
        </svg>
    </UButton>

    <!-- YouTube -->
    <UButton
        to="https://www.youtube.com/embed/tEgtT1LX-Sk"
        variant="link"
        aria-label="social-link"
         class="rounded-md"
        :ui="{ base: 'socials', label: 'socials' }"
        target="_blank"
        rel="noopener noreferrer"
    >
        <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
        >
            <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
        </svg>
    </UButton>

    <!-- FaceBook -->
    <UButton
        to="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/"
        variant="link"
        aria-label="social-link"
        class="rounded-md"
        :ui="{ base: 'text-(--ui-secondary)' }"
        target="_blank"
        rel="noopener noreferrer"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z" />
        </svg>
    </UButton>

    <!-- Instagram -->
    <UButton
        to="https://www.instagram.com/savethegroveagain2024/?igsh=MnZ5MzM3dXk2NWsx&utm_source=qr"
        variant="link"
        aria-label="social-link"
    >  
        <img
            src="/images/brands/instagram.svg"
            alt="Instagram logo"
            width="16"
            height="16"
        />
    </UButton>

    <!-- GitHub -->
    <UButton 
        to="https://github.com/annebrown/refactor-stga"
        variant="link"
        aria-label="social-link"
        class="socials"
    >
        <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
        </svg>
    </UButton>
        
</UButtonGroup>
    
</div></template>

<style>
.socials {
    @apply text-(--ui-secondary) stroke-(--ui-secondary) fill-(--ui-secondary);
}
</style>
<!--------@@/base/components/img/SocialIcons.vue------------------------------->