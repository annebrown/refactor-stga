<!--------@/app/components/fleet/SocialIcons.vue------------------------------->
<template><div>

<UButtonGroup 
    class="gap" 

>

    <!-- Email -->
    <UButton 
        to="mailto:savethegroveagain@gmail.com" 
        variant="link"
        aria-label="social-link"
        target="_blank"
        :ui="{ base: 'stga-button-social-icon' }"
        rel="noopener noreferrer"
    >
    <svg 
        xmlns="http://www.w3.org/2000/svg"             
        width="18" 
        height="18" 

        viewBox="0 0 56 56">
        <path fill="currentColor" d="M9.484 48.191h37.734c4.22 0 6.657-2.437 6.657-7.265V15.05c0-4.805-2.46-7.242-7.36-7.242H8.782c-4.195 0-6.656 2.414-6.656 7.242v25.875c0 4.851 2.484 7.265 7.36 7.265m15.727-19.007L7.516 11.723c.515-.211 1.124-.328 1.851-.328h37.29c.726 0 1.359.117 1.898.375L30.883 29.184c-1.008 1.007-1.899 1.453-2.836 1.453c-.938 0-1.828-.446-2.836-1.453M5.71 40.926v-26.11l13.476 13.22L5.734 41.323c-.023-.117-.023-.258-.023-.398m44.578-25.852v26.18L36.906 28.035L50.29 14.887zM9.367 44.606c-.68 0-1.242-.094-1.734-.305l14.015-13.852l1.524 1.5c1.64 1.617 3.21 2.297 4.875 2.297c1.64 0 3.234-.68 4.875-2.297l1.523-1.5l13.993 13.828c-.493.235-1.102.328-1.782.328Z"/></svg>
    </UButton>

    <!-- YouTube -->
    <UButton
        to="https://www.youtube.com/embed/tEgtT1LX-Sk"
        variant="link"
        aria-label="social-link"
        :ui="{ base: 'stga-button-social-icon', label: 'youtube' }"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
                src="/images/brands/youtube.svg"
                alt="Instagram logo"
                width="16"
                height="16"
            />
    </UButton>

    <!-- FaceBook -->
    <UButton
        to="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/"
        aria-label="social-link"
        :ui="{ base: 'stga-button-social-icon', label: '' }"
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
        aria-label="social-link"
        :ui="{ base: 'stga-button-social-icon', label: '' }"
    >  
        <img
            src="/images/brands/instagram.png"
            alt="Instagram logo"
            width="16"
            height="16"
        />

</UButton>

    <!-- GitHub -->
    <UButton 
        to="https://github.com/annebrown/refactor-stga"
        aria-label="social-link"
        :ui="{ base: 'stga-button-social-icon', label: 'github' }"
    >
        <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
        </svg>
    </UButton>
        
</UButtonGroup>
    
</div></template>
<!--------@/app/components/fleet/SocialIcons.vue------------------------------->
