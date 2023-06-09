
const inputElement = document.querySelector('input[id="document_uploaded"]');
const pond = FilePond.create((inputElement),
    {
        credits: false,

    });

pond.setOptions({
    server: {
        process: "/documents/tmp-upload",
        revert: "/documents/tmp-delete",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
    },
});

//remove uploaded files after success
function removeUploadedFiles() {
    if (pond) {
        var files = pond.getFiles();
        if (files.length > 0) {
            pond.processFiles().then(() => {
                pond.removeFiles();
                // console.log('Removed');
            });
        }
    }
}

// //file size bytes to megabytes converter
// function convertToHumanFileSize(bytes, si=false, dp=1) {
//     const thresh = si ? 1000 : 1024;
//
//     if (Math.abs(bytes) < thresh) {
//         return bytes + ' B';
//     }
//
//     const units = si
//         ? ['kB', 'MB', 'GB', 'TB']
//         : ['kB', 'MB', 'GB', 'TB'];
//     let u = -1;
//     const r = 10**dp;
//
//     do {
//         bytes /= thresh;
//         ++u;
//     } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
//
//
//     return bytes.toFixed(dp) + ' ' + units[u];
// }
