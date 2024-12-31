// وظيفة للتحقق من صلاحيات الكاميرا
function checkCameraPermission() {
    if (navigator.mediaDevices) {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            const cameraDevices = devices.filter(device => device.kind === 'videoinput');
            if (cameraDevices.length > 0) {
                alert("تنبيه: الكاميرا متصلة. تأكد من أنك قد منحت الأذونات.");
            }
        });
    } else {
        alert("المتصفح لا يدعم التحقق من الأجهزة.");
    }
}

// التأكد من الأذونات عند تحميل الصفحة
window.onload = function() {
    checkCameraPermission();
};
