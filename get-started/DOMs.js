export const DOMs = [
    `<div class="w-full mt-24">
                <div dir="rtl" class="leading-7 mx-auto px-3 space-y-8">
                    <div class="bg-white mx-auto px-2 md:px-4 lg:px-8 py-3 md:py-6 rounded-xl flex flex-col gap-1 md:gap-2 sm:w-110 lg:w-140">
                        <h2 class="text-center font-bold text-xl md:text-2xl">به نوتوپیا خوش آمدی</h2>
                        <p class="m-0 lg:text-lg">اینجا قرار است دنیای موسیقی را به شیوه خودت کشف کنی.</p>
                        <p class="m-0 lg:text-lg">فرقی نمی‌کند تازه شروع کرده باشی یا سال‌ها موسیقی کار کرده باشی؛ نوتوپیا به تو
                            کمک می‌کند
                            مسیر مناسب خودت را پیدا کنی.</p>
                        <p class="m-0 lg:text-lg">چند سؤال کوتاه داریم تا بهتر بشناسیمت.</p>
                    </div>
                    <div class="text-center">
                        <button
                            class="text-lg lg:text-xl px-3 sm:px-5 md:px-8 lg:px-8 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none mb-34 cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="1-2">بزن بریم!</button>
                    </div>
                </div>
            </div>`
    ,
    `<div class="flex flex-col gap-6 py-8 mt-6 w-full sm:w-110 lg:w-140 mx-auto">
                <section dir="rtl" class="flex text-white gap-2 text-xl mr-4">
                    <div class="font-bold">
                        سوال
                    </div>
                    <div dir="rtl" class="">
                        <span id="currentQuestion">1</span>
                        <span>از</span>
                        <span>5</span>
                    </div>
                </section>
                <section class="mx-2">
                    <div dir="rtl" class="bg-white max-w-full rounded-xl px-6 py-4 space-y-6">
                        <div>
                            <span class="text-base md:text-lg">
                                دوست داری با چه نامی صدایت کنیم؟
                            </span>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <input dir="rtl" type="text"
                                class="py-1 px-2 rounded-xl text-[16px] outline-none w-2/3 border-2 border-gray-500 focus:border-main focus:border-4 transition-all duration-100"
                                placeholder="علی اکبری">
                            <p class="m-0 text-xs text-neutral-800">می‌توانید بدون وارد کردن نام ادامه دهید.</p>
                        </div>
                    </div>
                </section>
                <section class="mx-6 flex justify-between">
                    <button
                        class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                        id="2-3">بعدی</button>
                </section>
            </div>`
    ,
    `<div class="w-full sm:w-110 lg:w-140 mx-auto mt-20">
                <div class="flex flex-col gap-4 py-8">
                    <section dir="rtl" class="flex text-white gap-2 text-xl mr-4">
                        <div class="font-bold">
                            سوال
                        </div>
                        <div dir="rtl" class="">
                            <span id="currentQuestion">2</span>
                            <span>از</span>
                            <span>5</span>
                        </div>
                    </section>
                    <section class="mx-2">
                        <div class="bg-white max-w-full rounded-xl px-6 py-4 space-y-6">
                            <div dir="rtl" class="px-3 sm:px-5">
                                <span class="text-base font-semibold md:text-lg">
                                    نت‌های موسیقی را چقدر می‌شناسی؟
                                </span>
                            </div>
                            <div dir="rtl"
                                class="w-full grid grid-cols-1 space-y-4 text-base xl:text-lg mt-3 sm:mt-5 xl:mt-7">
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        تقریباً هیچ چیزی درباره نت‌ها نمی‌دانم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        نام نت‌ها را می‌دانم، اما نمی‌توانم خیلی خوب از آن‌ها استفاده کنم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        نت‌ها را می‌شناسم و می‌توانم بعضی تمرین‌های نت‌خوانی را حل کنم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        در نت‌خوانی مهارت دارم و می‌توانم تمرین‌های دشوارتر را هم انجام دهم.
                                    </div>
                                </label>
                            </div>
                        </div>
                    </section>
                    <section class="mx-6 flex justify-between">
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="3-4">بعدی</button>
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="3-2">قبلی</button>
                    </section>
                </div>
            </div>`
    ,
    `<div class="w-full sm:w-110 lg:w-140 mx-auto mt-20">
                <div class="flex flex-col gap-4 py-8">
                    <section dir="rtl" class="flex text-white gap-2 text-xl mr-4">
                        <div class="font-bold">
                            سوال
                        </div>
                        <div dir="rtl" class="">
                            <span id="currentQuestion">3</span>
                            <span>از</span>
                            <span>5</span>
                        </div>
                    </section>
                    <section class="mx-2">
                        <div class="bg-white max-w-full rounded-xl px-6 py-4 space-y-6">
                            <div dir="rtl" class="px-3 sm:px-5">
                                <span class="text-base font-semibold md:text-lg">
                                    کدام گزینه درباره گام‌های موسیقی به تو نزدیک‌تر است؟
                                </span>
                            </div>
                            <div dir="rtl"
                                class="w-full grid grid-cols-1 space-y-4 text-base xl:text-lg mt-3 sm:mt-5 xl:mt-7">
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        نمی‌دانم گام موسیقی چیست.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                       نام گام‌های ماژور و مینور را شنیده‌ام.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        می‌توانم گام‌های ساده را تشکیل دهم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                       می‌توانم گام‌های مختلف را تشکیل دهم و ساختار آن‌ها را تحلیل کنم.
                                    </div>
                                </label>
                            </div>
                        </div>
                    </section>
                    <section class="mx-6 flex justify-between">
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="4-5">بعدی</button>
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="4-3">قبلی</button>
                    </section>
                </div>
            </div>`
    ,
    `<div class="w-full sm:w-110 lg:w-140 mx-auto mt-20">
                <div class="flex flex-col gap-4 py-8">
                    <section dir="rtl" class="flex text-white gap-2 text-xl mr-4">
                        <div class="font-bold">
                            سوال
                        </div>
                        <div dir="rtl" class="">
                            <span id="currentQuestion">4</span>
                            <span>از</span>
                            <span>5</span>
                        </div>
                    </section>
                    <section class="mx-2">
                        <div class="bg-white max-w-full rounded-xl px-6 py-4 space-y-6">
                            <div dir="rtl" class="px-3 sm:px-5">
                                <span class="text-base font-semibold md:text-lg">
                                    اگر بخواهی فاصله بین دو نت را پیدا کنی، چه‌قدر توانایی داری؟
                                </span>
                            </div>
                            <div dir="rtl"
                                class="w-full grid grid-cols-1 space-y-4 text-base xl:text-lg mt-3 sm:mt-5 xl:mt-7">
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        هنوز مفهوم فاصله موسیقی را نمی‌دانم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        مفهوم فاصله را شنیده‌ام، اما محاسبه آن برایم دشوار است.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                        می‌توانم فاصله‌های معمول را محاسبه کنم.
                                    </div>
                                </label>
                                <label class="flex gap-0.5 items-center">
                                    <input type="radio" name="question-1" class="w-fit h-fit mb-1">
                                    <div>
                                       می‌توانم فاصله‌های مختلف را محاسبه و تحلیل کنم.
                                    </div>
                                </label>
                            </div>
                        </div>
                    </section>
                    <section class="mx-6 flex justify-between">
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="5-6">بعدی</button>
                        <button
                            class="text-lg lg:text-xl w-18 md:w-20 lg:w-24 py-1 md:py-1.5 border-2 ring-white rounded-xl md:rounded-2xl outline-none cursor-pointer hover:scale-105 ring-2 focus:ring-6 ring-offset-0 border-none transition-all bg-main navigation"
                            id="5-4">قبلی</button>
                    </section>
                </div>
            </div>`
]