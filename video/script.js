// Firefighters Reference Site JavaScript

// Sections Data
const sectionsData = [
    {
        id: 'fire-safety',
        title: 'السلامة من الحرائق',
        icon: 'fas fa-fire',
        description: 'أساسيات الوقاية من الحرائق وطرق التعامل معها',
        color: '#dc3545',
        content: {
            description: 'السلامة من الحرائق هي مجموعة من الإجراءات والتدابير الوقائية التي تهدف إلى منع حدوث الحرائق والحد من آثارها المدمرة.',
            subtopics: [
                {
                    id: 'fire-types',
                    title: 'أنواع الحرائق المختلفة',
                    description: 'تصنيف الحرائق حسب نوع الوقود وطرق التعامل مع كل نوع',
                    videos: [
                        {
                            title: 'حرائق الفئة A - المواد الصلبة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'UGU_6RRmWvM'
                        },
                        {
                            title: 'حرائق الفئة B - السوائل القابلة للاشتعال',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'حرائق الفئة C - الغازات',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-detection',
                    title: 'أجهزة الإنذار والكشف',
                    description: 'أنواع أجهزة الكشف عن الحرائق وطرق تركيبها وصيانتها',
                    videos: [
                        {
                            title: 'أجهزة كشف الدخان',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'أجهزة كشف الحرارة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'أنظمة الإنذار المتكاملة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-extinguishers',
                    title: 'معدات الإطفاء الأساسية',
                    description: 'أنواع طفايات الحريق وطرق استخدامها الصحيحة',
                    videos: [
                        {
                            title: 'طفايات الماء',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'طفايات الرغوة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'طفايات ثاني أكسيد الكربون',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'evacuation-plans',
                    title: 'خطة الإخلاء في حالات الطوارئ',
                    description: 'وضع وتنفيذ خطط الإخلاء في حالات الطوارئ',
                    videos: [
                        {
                            title: 'تصميم خطة الإخلاء',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تدريب على الإخلاء',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إشارات الإخلاء والاتجاهات',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-safety-training',
                    title: 'التدريب على السلامة من الحرائق',
                    description: 'برامج التدريب المتخصصة في السلامة من الحرائق',
                    videos: [
                        {
                            title: 'التدريب الأساسي للسلامة من الحرائق',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب المتقدم على مكافحة الحرائق',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'محاكاة حالات الطوارئ',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-prevention',
                    title: 'الوقاية من الحرائق',
                    description: 'إجراءات الوقاية من الحرائق في المنازل والمؤسسات',
                    videos: [
                        {
                            title: 'فحص التوصيلات الكهربائية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تخزين المواد القابلة للاشتعال',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة أنظمة التدفئة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-investigation',
                    title: 'تحقيق الحرائق',
                    description: 'أساليب وأدوات التحقيق في أسباب الحرائق',
                    videos: [
                        {
                            title: 'أساسيات تحقيق الحرائق',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'جمع الأدلة والتحليل',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'كتابة تقارير التحقيق',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'wildfire-safety',
                    title: 'الحرائق البرية',
                    description: 'التعامل مع الحرائق البرية والوقاية منها',
                    videos: [
                        {
                            title: 'خصائص الحرائق البرية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استراتيجيات مكافحة الحرائق البرية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إخلاء المناطق المهددة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'rescue-operations',
        title: 'عمليات الإنقاذ',
        icon: 'fas fa-hands-helping',
        description: 'تقنيات الإنقاذ في مختلف المواقف الطارئة',
        color: '#fd7e14',
        content: {
            description: 'عمليات الإنقاذ تتطلب مهارات خاصة ومعرفة دقيقة بأساليب الإنقاذ المختلفة في المواقف الطارئة.',
            subtopics: [
                {
                    id: 'building-rescue',
                    title: 'إنقاذ الأشخاص من المباني المحترقة',
                    description: 'تقنيات الإنقاذ من المباني المحترقة والمتضررة',
                    videos: [
                        {
                            title: 'تقييم المبنى المحترق',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استخدام السلالم والمنصات',
                            thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تقنيات الدخول الآمن',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'high-angle-rescue',
                    title: 'الإنقاذ من المرتفعات',
                    description: 'تقنيات الإنقاذ من الأماكن المرتفعة والخطيرة',
                    videos: [
                        {
                            title: 'استخدام الحبال والمعدات',
                            thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تقنيات النزول الآمن',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إنقاذ من الأبراج والجسور',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'water-rescue',
                    title: 'الإنقاذ المائي',
                    description: 'تقنيات الإنقاذ في المياه والفيضانات',
                    videos: [
                        {
                            title: 'الإنقاذ من المياه الهادئة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'الإنقاذ من المياه المتدفقة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استخدام القوارب والطوافات',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'animal-rescue',
                    title: 'إنقاذ الحيوانات',
                    description: 'تقنيات إنقاذ الحيوانات في حالات الطوارئ',
                    videos: [
                        {
                            title: 'إنقاذ الحيوانات الأليفة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إنقاذ الحيوانات البرية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إنقاذ الحيوانات الكبيرة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'confined-space-rescue',
                    title: 'إنقاذ من الأماكن الضيقة',
                    description: 'تقنيات الإنقاذ من الأماكن الضيقة والمغلقة',
                    videos: [
                        {
                            title: 'تقييم الأماكن الضيقة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معدات التنفس في الأماكن الضيقة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تقنيات الإخراج الآمن',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'vehicle-extrication',
                    title: 'إنقاذ من المركبات',
                    description: 'تقنيات إنقاذ المصابين من المركبات المحطمة',
                    videos: [
                        {
                            title: 'تقييم المركبة المحطمة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استخدام أدوات القطع والرفع',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إخراج المصابين بأمان',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'trench-rescue',
                    title: 'إنقاذ من الخنادق',
                    description: 'تقنيات الإنقاذ من الخنادق والأنفاق المنهارة',
                    videos: [
                        {
                            title: 'تقييم الخندق المنهار',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تقنيات الدعم والتدعيم',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'الإنقاذ الآمن من الخنادق',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'rescue-equipment',
                    title: 'معدات الإنقاذ المتخصصة',
                    description: 'استخدام وصيانة معدات الإنقاذ المتخصصة',
                    videos: [
                        {
                            title: 'أنواع معدات الإنقاذ',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة معدات الإنقاذ',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على استخدام المعدات',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'emergency-medical',
        title: 'الإسعافات الأولية',
        icon: 'fas fa-ambulance',
        description: 'المبادئ الأساسية للإسعافات الأولية في حالات الطوارئ',
        color: '#28a745',
        content: {
            description: 'الإسعافات الأولية هي الرعاية الفورية التي تُقدم للمصابين قبل وصول الطاقم الطبي المتخصص.',
            subtopics: [
                {
                    id: 'patient-assessment',
                    title: 'تقييم حالة المصاب',
                    description: 'الخطوات الأساسية لتقييم حالة المصاب وتحديد الأولويات',
                    videos: [
                        {
                            title: 'فحص الوعي والتنفس',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص العلامات الحيوية',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تحديد الأولويات الطبية',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'cpr-basic',
                    title: 'الإنعاش القلبي الرئوي (CPR)',
                    description: 'تقنيات الإنعاش القلبي الرئوي الأساسية والمتقدمة',
                    videos: [
                        {
                            title: 'CPR للبالغين',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'CPR للأطفال',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'CPR للرضع',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'wound-care',
                    title: 'معالجة الجروح والحروق',
                    description: 'تقنيات معالجة الجروح والحروق المختلفة',
                    videos: [
                        {
                            title: 'معالجة الجروح المفتوحة',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معالجة الحروق من الدرجة الأولى',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معالجة الحروق الشديدة',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fracture-management',
                    title: 'التعامل مع الكسور',
                    description: 'تقنيات التعامل مع الكسور والإصابات العظمية',
                    videos: [
                        {
                            title: 'تثبيت الكسور المفتوحة',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تثبيت الكسور المغلقة',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'كسور العمود الفقري',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'aed-usage',
                    title: 'استخدام جهاز إزالة الرجفان (AED)',
                    description: 'استخدام جهاز إزالة الرجفان في حالات الطوارئ',
                    videos: [
                        {
                            title: 'أساسيات استخدام AED',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'خطوات تشغيل AED',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة جهاز AED',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'shock-management',
                    title: 'إدارة الصدمة',
                    description: 'التعامل مع حالات الصدمة المختلفة',
                    videos: [
                        {
                            title: 'أنواع الصدمة',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معالجة الصدمة النزفية',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معالجة الصدمة العصبية',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'poisoning-treatment',
                    title: 'معالجة التسمم',
                    description: 'التعامل مع حالات التسمم المختلفة',
                    videos: [
                        {
                            title: 'تسمم المواد الكيميائية',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تسمم الطعام',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تسمم الأدوية',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'medical-equipment',
                    title: 'المعدات الطبية الطارئة',
                    description: 'استخدام وصيانة المعدات الطبية الطارئة',
                    videos: [
                        {
                            title: 'معدات التنفس الطارئة',
                            thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معدات مراقبة العلامات الحيوية',
                            thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معدات النقل الطبي',
                            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'hazardous-materials',
        title: 'المواد الخطرة',
        icon: 'fas fa-biohazard',
        description: 'التعامل مع المواد الكيميائية والخطرة',
        color: '#6f42c1',
        content: {
            description: 'التعامل مع المواد الخطرة يتطلب معرفة خاصة بأنواع المواد وطرق التعامل الآمن معها.',
            subtopics: [
                {
                    id: 'hazmat-classification',
                    title: 'تصنيف المواد الخطرة',
                    description: 'أنظمة تصنيف المواد الخطرة وطرق التعرف عليها',
                    videos: [
                        {
                            title: 'تصنيف المواد الكيميائية',
                            thumbnail: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'رموز الخطر الدولية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'بطاقات السلامة للمواد',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'ppe-equipment',
                    title: 'معدات الحماية الشخصية',
                    description: 'أنواع واستخدام معدات الحماية الشخصية',
                    videos: [
                        {
                            title: 'أقنعة التنفس',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'بدلات الحماية الكيميائية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'قفازات الحماية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'spill-response',
                    title: 'طرق التعامل مع التسريبات',
                    description: 'إجراءات التعامل مع تسريبات المواد الخطرة',
                    videos: [
                        {
                            title: 'تقييم التسريبات',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'احتواء التسريبات',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تنظيف التسريبات',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'emergency-procedures',
                    title: 'إجراءات الطوارئ للمواد الكيميائية',
                    description: 'خطة الطوارئ للتعامل مع حوادث المواد الخطرة',
                    videos: [
                        {
                            title: 'خطة الطوارئ للمواد الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إخلاء المناطق الملوثة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التنسيق مع الجهات المختصة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'waste-disposal',
                    title: 'التخلص الآمن من المواد الخطرة',
                    description: 'طرق التخلص الآمن من النفايات الخطرة',
                    videos: [
                        {
                            title: 'تصنيف النفايات الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تعبئة النفايات الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'نقل النفايات الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'radiation-safety',
                    title: 'السلامة الإشعاعية',
                    description: 'التعامل مع المواد المشعة والحماية منها',
                    videos: [
                        {
                            title: 'أساسيات الإشعاع',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معدات قياس الإشعاع',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'الحماية من الإشعاع',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'biological-hazards',
                    title: 'المخاطر البيولوجية',
                    description: 'التعامل مع المخاطر البيولوجية والمواد المعدية',
                    videos: [
                        {
                            title: 'أنواع المخاطر البيولوجية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'معدات الحماية البيولوجية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إجراءات التعقيم',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'hazmat-transport',
                    title: 'نقل المواد الخطرة',
                    description: 'إجراءات نقل المواد الخطرة بأمان',
                    videos: [
                        {
                            title: 'متطلبات نقل المواد الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'وثائق النقل المطلوبة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على النقل الآمن',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'equipment-maintenance',
        title: 'صيانة المعدات',
        icon: 'fas fa-tools',
        description: 'صيانة وإصلاح معدات الإطفاء والإنقاذ',
        color: '#20c997',
        content: {
            description: 'صيانة المعدات بشكل دوري يضمن جاهزيتها للاستخدام في حالات الطوارئ.',
            subtopics: [
                {
                    id: 'fire-extinguisher-maintenance',
                    title: 'فحص معدات الإطفاء',
                    description: 'فحص وصيانة طفايات الحريق ومعدات الإطفاء',
                    videos: [
                        {
                            title: 'فحص طفايات الحريق',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة خراطيم المياه',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص أنظمة الرش التلقائي',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'fire-truck-maintenance',
                    title: 'صيانة سيارات الإطفاء',
                    description: 'صيانة وإصلاح سيارات الإطفاء والمعدات المركبة',
                    videos: [
                        {
                            title: 'فحص المحرك والأنظمة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة مضخات المياه',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص الأنظمة الكهربائية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'breathing-apparatus',
                    title: 'فحص معدات التنفس',
                    description: 'فحص وصيانة أجهزة التنفس والهواء المضغوط',
                    videos: [
                        {
                            title: 'فحص أجهزة التنفس الذاتي',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة خزانات الهواء',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص منظمات التنفس',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'communication-systems',
                    title: 'صيانة أجهزة الاتصال',
                    description: 'فحص وصيانة أنظمة الاتصال والراديو',
                    videos: [
                        {
                            title: 'فحص أجهزة الراديو',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة أنظمة الاتصال الداخلي',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص أنظمة الإنذار',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'ladder-maintenance',
                    title: 'صيانة السلالم والمعدات الميكانيكية',
                    description: 'فحص وصيانة السلالم والمعدات الميكانيكية',
                    videos: [
                        {
                            title: 'فحص سلالم الإطفاء',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة المنصات الهيدروليكية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص أنظمة الرفع',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'safety-equipment',
                    title: 'معدات السلامة والحماية',
                    description: 'فحص وصيانة معدات السلامة الشخصية',
                    videos: [
                        {
                            title: 'فحص الخوذات الواقية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'صيانة البدلات الواقية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'فحص القفازات والأحذية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'maintenance-documentation',
                    title: 'سجلات الصيانة والتوثيق',
                    description: 'إدارة سجلات الصيانة والتوثيق',
                    videos: [
                        {
                            title: 'نظام إدارة الصيانة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تسجيل أعمال الصيانة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تقارير الصيانة الدورية',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'emergency-repairs',
                    title: 'الإصلاحات الطارئة',
                    description: 'إجراء الإصلاحات الطارئة في الميدان',
                    videos: [
                        {
                            title: 'إصلاحات الميدان الأساسية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استخدام أدوات الإصلاح المحمولة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إجراءات الطوارئ للمعدات',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'training-programs',
        title: 'برامج التدريب',
        icon: 'fas fa-graduation-cap',
        description: 'برامج التدريب والتطوير المهني',
        color: '#17a2b8',
        content: {
            description: 'التدريب المستمر ضروري لتطوير المهارات والحفاظ على الجاهزية للتعامل مع الطوارئ.',
            subtopics: [
                {
                    id: 'basic-training',
                    title: 'برامج التدريب الأساسية',
                    description: 'التدريب الأساسي لرجال الإطفاء الجدد',
                    videos: [
                        {
                            title: 'التدريب الأساسي للإطفاء',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على السلامة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على المعدات',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'advanced-training',
                    title: 'التدريب المتقدم',
                    description: 'برامج التدريب المتخصصة والمتقدمة',
                    videos: [
                        {
                            title: 'التدريب المتقدم على الإنقاذ',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على المواد الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على الإسعافات المتقدمة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'simulation-training',
                    title: 'محاكاة حالات الطوارئ',
                    description: 'التدريب باستخدام المحاكاة والسيناريوهات الواقعية',
                    videos: [
                        {
                            title: 'محاكاة حرائق المباني',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'محاكاة حوادث المواد الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'محاكاة عمليات الإنقاذ',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'leadership-training',
                    title: 'التدريب على القيادة',
                    description: 'برامج تطوير المهارات القيادية',
                    videos: [
                        {
                            title: 'مبادئ القيادة في الطوارئ',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'إدارة الفرق في الميدان',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'اتخاذ القرارات تحت الضغط',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'physical-fitness',
                    title: 'اللياقة البدنية',
                    description: 'برامج التدريب البدني واللياقة',
                    videos: [
                        {
                            title: 'تمارين القوة والتحمل',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تمارين القلب والأوعية الدموية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'تمارين المرونة والتوازن',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'technical-skills',
                    title: 'المهارات التقنية',
                    description: 'التدريب على المهارات التقنية المتخصصة',
                    videos: [
                        {
                            title: 'استخدام التقنيات الحديثة',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التدريب على البرمجيات المتخصصة',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'استخدام أجهزة القياس والمراقبة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'performance-evaluation',
                    title: 'تقييم الأداء والمتابعة',
                    description: 'أنظمة تقييم الأداء والمتابعة المستمرة',
                    videos: [
                        {
                            title: 'أنظمة تقييم الأداء',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'التقييم العملي للمهارات',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'خطط التطوير المهني',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                },
                {
                    id: 'certification-programs',
                    title: 'برامج الشهادات المهنية',
                    description: 'برامج الحصول على الشهادات المهنية المعتمدة',
                    videos: [
                        {
                            title: 'شهادات السلامة المهنية',
                            thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'شهادات الإسعافات الأولية',
                            thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        },
                        {
                            title: 'شهادات المواد الخطرة',
                            thumbnail: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=300&h=200&fit=crop&crop=center',
                            videoId: 'dQw4w9WgXcQ'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'fire-articles',
        title: 'مقالات الإطفاء',
        icon: 'fas fa-newspaper',
        description: 'مقالات متخصصة في الإطفاء والطوارئ',
        color: '#e74c3c',
        content: {
            description: 'مجموعة شاملة من المقالات المتخصصة في مجال الإطفاء والطوارئ، تغطي أحدث التقنيات والطرق والدراسات في هذا المجال.',
            subtopics: [
                {
                    id: 'fire-science',
                    title: 'علوم الإطفاء',
                    description: 'المبادئ العلمية والفيزيائية للإطفاء',
                    article: {
                        title: 'فهم علوم الإطفاء: المبادئ الأساسية',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="علوم الإطفاء" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مختبر أبحاث الإطفاء - دراسة سلوك الحرائق</small>
                                </div>
                            </div>
                            
                            <h5>مقدمة في علوم الإطفاء</h5>
                            <p>تعتبر علوم الإطفاء من أهم المجالات العلمية التي تجمع بين الفيزياء والكيمياء والهندسة لفهم طبيعة الحرائق وطرق مكافحتها. هذا المقال يقدم نظرة شاملة على المبادئ الأساسية.</p>
                            
                            <h6>1. كيمياء الاحتراق</h6>
                            <p>الاحتراق هو تفاعل كيميائي سريع بين الوقود والأكسجين ينتج عنه حرارة وضوء. يتطلب هذا التفاعل ثلاثة عناصر أساسية:</p>
                            <ul>
                                <li><strong>الوقود:</strong> أي مادة قابلة للاشتعال</li>
                                <li><strong>الأكسجين:</strong> ضروري لاستمرار التفاعل</li>
                                <li><strong>الحرارة:</strong> لبدء التفاعل والحفاظ عليه</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="مثلث النار" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مثلث النار - العناصر الثلاثة الأساسية للاحتراق</small>
                                </div>
                            </div>
                            
                            <h6>2. ديناميكية الحرائق</h6>
                            <p>تنتشر الحرائق عبر ثلاث طرق رئيسية:</p>
                            <ul>
                                <li><strong>التوصيل:</strong> انتقال الحرارة عبر المواد الصلبة</li>
                                <li><strong>الحمل:</strong> انتقال الحرارة عبر الغازات والسوائل</li>
                                <li><strong>الإشعاع:</strong> انتقال الحرارة عبر الموجات الكهرومغناطيسية</li>
                            </ul>
                            
                            <h6>3. الفيزياء الحرارية</h6>
                            <p>فهم انتقال الحرارة أمر حيوي في الإطفاء. تنتقل الحرارة من المناطق الساخنة إلى الباردة، ويمكن التحكم في هذا الانتقال باستخدام مواد عازلة أو مياه التبريد.</p>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="انتقال الحرارة" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">أنماط انتقال الحرارة في الحرائق</small>
                                </div>
                            </div>
                            
                            <h6>4. تطبيقات عملية</h6>
                            <p>تساعد هذه المعرفة رجال الإطفاء في:</p>
                            <ul>
                                <li>اختيار أفضل طرق الإطفاء</li>
                                <li>توقع سلوك الحرائق</li>
                                <li>تطوير استراتيجيات أكثر فعالية</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-tactics',
                    title: 'تكتيكات الإطفاء',
                    description: 'الاستراتيجيات والتكتيكات المتقدمة في مكافحة الحرائق',
                    article: {
                        title: 'استراتيجيات الإطفاء المتقدمة',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="تكتيكات الإطفاء" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">فرق الإطفاء في العمل - تطبيق التكتيكات المتقدمة</small>
                                </div>
                            </div>
                            
                            <h5>تكتيكات الإطفاء الفعالة</h5>
                            <p>تكتيكات الإطفاء هي مجموعة من الاستراتيجيات والطرق المستخدمة لمكافحة الحرائق بفعالية وأمان. تتطلب هذه التكتيكات فهماً عميقاً لطبيعة الحرائق والموارد المتاحة.</p>
                            
                            <h6>1. استراتيجيات الهجوم المباشر</h6>
                            <p>يتم استخدام الهجوم المباشر عندما تكون الظروف آمنة نسبياً:</p>
                            <ul>
                                <li><strong>الهجوم الداخلي:</strong> دخول المبنى المحترق مباشرة</li>
                                <li><strong>استخدام المياه:</strong> تطبيق المياه مباشرة على النار</li>
                                <li><strong>التهوية التكتيكية:</strong> فتح فتحات للتحكم في الدخان</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="الهجوم المباشر" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">الهجوم المباشر - دخول المبنى المحترق</small>
                                </div>
                            </div>
                            
                            <h6>2. التكتيكات الدفاعية</h6>
                            <p>تستخدم عندما يكون الهجوم المباشر خطيراً:</p>
                            <ul>
                                <li><strong>الحماية الدفاعية:</strong> حماية المباني المجاورة</li>
                                <li><strong>الإطفاء من الخارج:</strong> استخدام السلالم والمنصات</li>
                                <li><strong>الاحتواء:</strong> منع انتشار النار</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="التكتيكات الدفاعية" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">الإطفاء من الخارج - استخدام السلالم والمنصات</small>
                                </div>
                            </div>
                            
                            <h6>3. التنسيق بين الفرق</h6>
                            <p>يتطلب الإطفاء الفعال تنسيقاً دقيقاً بين:</p>
                            <ul>
                                <li>فرق الإطفاء المختلفة</li>
                                <li>أجهزة الطوارئ الأخرى</li>
                                <li>السلطات المحلية</li>
                            </ul>
                            
                            <h6>4. تقنيات متقدمة</h6>
                            <p>تشمل التقنيات الحديثة:</p>
                            <ul>
                                <li>استخدام الرغوة المتخصصة</li>
                                <li>أنظمة الإطفاء بالغاز</li>
                                <li>التقنيات الرقمية للمراقبة</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-investigation',
                    title: 'تحقيق الحرائق',
                    description: 'أساليب وأدوات التحقيق في أسباب الحرائق',
                    article: {
                        title: 'فن وعلم تحقيق الحرائق',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="تحقيق الحرائق" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">محقق الحرائق في العمل - فحص موقع الحريق</small>
                                </div>
                            </div>
                            
                            <h5>مقدمة في تحقيق الحرائق</h5>
                            <p>تحقيق الحرائق هو عملية علمية منهجية لتحديد سبب وطريقة نشوب الحريق. يتطلب هذا العمل مهارات خاصة ومعرفة عميقة بعلوم الإطفاء والقانون.</p>
                            
                            <h6>1. أساسيات التحقيق</h6>
                            <p>يبدأ التحقيق فور انتهاء الحريق:</p>
                            <ul>
                                <li><strong>تأمين الموقع:</strong> منع تلوث الأدلة</li>
                                <li><strong>التوثيق:</strong> تصوير وتسجيل جميع التفاصيل</li>
                                <li><strong>جمع الأدلة:</strong> عينات من المواد المحترقة</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="أدوات التحقيق" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">أدوات التحقيق المتخصصة - كاميرات ومجاهر</small>
                                </div>
                            </div>
                            
                            <h6>2. أدوات التحقيق</h6>
                            <p>يستخدم المحققون أدوات متخصصة:</p>
                            <ul>
                                <li>كاميرات عالية الدقة</li>
                                <li>أدوات قياس الحرارة</li>
                                <li>مجاهر للفحص الدقيق</li>
                                <li>أدوات جمع العينات</li>
                            </ul>
                            
                            <h6>3. التحليل العلمي</h6>
                            <p>يشمل التحليل:</p>
                            <ul>
                                <li>فحص أنماط الاحتراق</li>
                                <li>تحليل المواد الكيميائية</li>
                                <li>دراسة ظروف الطقس</li>
                                <li>مراجعة أنظمة السلامة</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="التحليل العلمي" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مختبر التحليل - فحص عينات من موقع الحريق</small>
                                </div>
                            </div>
                            
                            <h6>4. كتابة التقارير</h6>
                            <p>يجب أن تكون التقارير:</p>
                            <ul>
                                <li>دقيقة ومفصلة</li>
                                <li>مدعومة بالأدلة</li>
                                <li>قابلة للفهم من قبل المحاكم</li>
                                <li>محدثة بانتظام</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-prevention',
                    title: 'الوقاية من الحرائق',
                    description: 'إجراءات الوقاية والحد من مخاطر الحرائق',
                    article: {
                        title: 'استراتيجيات الوقاية من الحرائق',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="الوقاية من الحرائق" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">أنظمة الوقاية المتقدمة - كواشف الدخان والحرارة</small>
                                </div>
                            </div>
                            
                            <h5>الوقاية خير من العلاج</h5>
                            <p>الوقاية من الحرائق هي أفضل طريقة لحماية الأرواح والممتلكات. تتطلب هذه الوقاية فهماً شاملاً للمخاطر وتطبيق إجراءات فعالة.</p>
                            
                            <h6>1. تصميم المباني الآمنة</h6>
                            <p>يجب أن تتضمن المباني الحديثة:</p>
                            <ul>
                                <li><strong>مواد مقاومة للحريق:</strong> استخدام مواد غير قابلة للاشتعال</li>
                                <li><strong>أنظمة الإنذار:</strong> كواشف الدخان والحرارة</li>
                                <li><strong>مخارج الطوارئ:</strong> طرق إخلاء واضحة وآمنة</li>
                                <li><strong>أنظمة الإطفاء:</strong> رشاشات تلقائية وطفايات</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="تصميم المباني الآمنة" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مبنى حديث مع أنظمة السلامة المتكاملة</small>
                                </div>
                            </div>
                            
                            <h6>2. أنظمة الوقاية المتقدمة</h6>
                            <p>تشمل التقنيات الحديثة:</p>
                            <ul>
                                <li>أنظمة الكشف الذكية</li>
                                <li>أنظمة الإطفاء بالغاز</li>
                                <li>أنظمة التهوية الطارئة</li>
                                <li>أنظمة المراقبة الرقمية</li>
                            </ul>
                            
                            <h6>3. التوعية المجتمعية</h6>
                            <p>تتضمن برامج التوعية:</p>
                            <ul>
                                <li>تدريب المواطنين على السلامة</li>
                                <li>توزيع مواد توعوية</li>
                                <li>تنظيم ورش عمل</li>
                                <li>إجراء تمارين إخلاء</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="التوعية المجتمعية" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">ورشة توعية مجتمعية حول الوقاية من الحرائق</small>
                                </div>
                            </div>
                            
                            <h6>4. الصيانة الدورية</h6>
                            <p>تشمل الصيانة:</p>
                            <ul>
                                <li>فحص أنظمة الإنذار</li>
                                <li>صيانة أنظمة الإطفاء</li>
                                <li>تنظيف مجاري التهوية</li>
                                <li>فحص التوصيلات الكهربائية</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'wildfire-management',
                    title: 'إدارة الحرائق البرية',
                    description: 'استراتيجيات مكافحة وإدارة الحرائق البرية',
                    article: {
                        title: 'إدارة الحرائق البرية: التحدي الكبير',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="الحرائق البرية" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">حرائق برية ضخمة - تحدٍ كبير لفرق الإطفاء</small>
                                </div>
                            </div>
                            
                            <h5>مواجهة الحرائق البرية</h5>
                            <p>الحرائق البرية تشكل تحدياً كبيراً لرجال الإطفاء بسبب حجمها وسرعة انتشارها. تتطلب إدارة هذه الحرائق استراتيجيات خاصة ومعدات متخصصة.</p>
                            
                            <h6>1. خصائص الحرائق البرية</h6>
                            <p>تتميز الحرائق البرية بـ:</p>
                            <ul>
                                <li><strong>السرعة:</strong> تنتشر بسرعة كبيرة</li>
                                <li><strong>الحجم:</strong> تغطي مساحات شاسعة</li>
                                <li><strong>التأثير:</strong> تدمر النظم البيئية</li>
                                <li><strong>الخطورة:</strong> تهدد المجتمعات</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="المكافحة الجوية" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">الطائرات المخصصة لمكافحة الحرائق البرية</small>
                                </div>
                            </div>
                            
                            <h6>2. استراتيجيات المكافحة الجوية</h6>
                            <p>تتضمن:</p>
                            <ul>
                                <li>استخدام الطائرات المخصصة</li>
                                <li>إسقاط المياه والمواد المثبطة</li>
                                <li>المراقبة الجوية المستمرة</li>
                                <li>التنسيق مع الفرق الأرضية</li>
                            </ul>
                            
                            <h6>3. إدارة الأزمات</h6>
                            <p>تشمل:</p>
                            <ul>
                                <li>إخلاء المناطق المهددة</li>
                                <li>تنسيق الجهود بين الوكالات</li>
                                <li>التواصل مع وسائل الإعلام</li>
                                <li>توفير الدعم للمتضررين</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="إدارة الأزمات" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مركز إدارة الأزمات - تنسيق الجهود</small>
                                </div>
                            </div>
                            
                            <h6>4. الوقاية والاستعداد</h6>
                            <p>تتضمن:</p>
                            <ul>
                                <li>إنشاء مناطق عازلة</li>
                                <li>تطوير أنظمة الإنذار المبكر</li>
                                <li>تدريب المجتمعات المحلية</li>
                                <li>تطوير خطط الطوارئ</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-safety-engineering',
                    title: 'هندسة السلامة من الحرائق',
                    description: 'التطبيقات الهندسية في تصميم أنظمة السلامة',
                    article: {
                        title: 'الهندسة في خدمة السلامة',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="هندسة السلامة" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">أنظمة السلامة المتقدمة - التصميم الهندسي</small>
                                </div>
                            </div>
                            
                            <h5>هندسة السلامة من الحرائق</h5>
                            <p>تطبق الهندسة مبادئ علمية لتصميم أنظمة السلامة الفعالة. تجمع هذه الهندسة بين المعرفة التقنية والسلامة لإنشاء بيئات آمنة.</p>
                            
                            <h6>1. تصميم أنظمة الإطفاء التلقائي</h6>
                            <p>تشمل هذه الأنظمة:</p>
                            <ul>
                                <li><strong>أنظمة الرش:</strong> رشاشات تلقائية متصلة بشبكة المياه</li>
                                <li><strong>أنظمة الرغوة:</strong> للحرائق النفطية والكيميائية</li>
                                <li><strong>أنظمة الغاز:</strong> لإطفاء الحرائق في الأماكن المغلقة</li>
                                <li><strong>أنظمة المسحوق:</strong> للحرائق الكهربائية</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="أنظمة الإطفاء التلقائي" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">أنظمة الرش التلقائية - حماية شاملة</small>
                                </div>
                            </div>
                            
                            <h6>2. أنظمة الإنذار والكشف</h6>
                            <p>تتضمن:</p>
                            <ul>
                                <li>كواشف الدخان التقليدية</li>
                                <li>كواشف الحرارة الذكية</li>
                                <li>أنظمة الكشف بالليزر</li>
                                <li>أنظمة المراقبة بالفيديو</li>
                            </ul>
                            
                            <h6>3. التهوية في حالات الطوارئ</h6>
                            <p>تشمل:</p>
                            <ul>
                                <li>أنظمة إزالة الدخان</li>
                                <li>أنظمة ضغط الهواء</li>
                                <li>أنظمة التهوية الطبيعية</li>
                                <li>أنظمة التحكم في الهواء</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="التصميم المعماري الآمن" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مبنى حديث مع أنظمة التهوية الطارئة</small>
                                </div>
                            </div>
                            
                            <h6>4. التصميم المعماري الآمن</h6>
                            <p>يجب أن يتضمن:</p>
                            <ul>
                                <li>مخارج طوارئ متعددة</li>
                                <li>ممرات إخلاء آمنة</li>
                                <li>أبواب مقاومة للحريق</li>
                                <li>نوافذ قابلة للكسر</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-research',
                    title: 'البحوث والدراسات',
                    description: 'أحدث الأبحاث والدراسات في مجال الإطفاء',
                    article: {
                        title: 'البحث العلمي في خدمة الإطفاء',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="البحوث والدراسات" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مختبر الأبحاث - تطوير تقنيات الإطفاء الحديثة</small>
                                </div>
                            </div>
                            
                            <h5>أهمية البحث في تطوير الإطفاء</h5>
                            <p>البحث العلمي هو المحرك الرئيسي لتطوير تقنيات الإطفاء وتحسين فعاليتها. يساهم البحث في إنقاذ المزيد من الأرواح وحماية الممتلكات.</p>
                            
                            <h6>1. أحدث تقنيات الإطفاء</h6>
                            <p>تشمل التطورات الحديثة:</p>
                            <ul>
                                <li><strong>المياه الذكية:</strong> إضافة مواد كيميائية لتحسين فعالية المياه</li>
                                <li><strong>الرغوة المتقدمة:</strong> رغوة أكثر فعالية وأقل ضرراً بالبيئة</li>
                                <li><strong>أنظمة الليزر:</strong> استخدام الليزر لكشف الحرائق</li>
                                <li><strong>الذكاء الاصطناعي:</strong> تحليل البيانات للتنبؤ بالحرائق</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="التقنيات الحديثة" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">تقنيات الإطفاء المتطورة - الذكاء الاصطناعي</small>
                                </div>
                            </div>
                            
                            <h6>2. دراسات سلوك الحرائق</h6>
                            <p>تركز الدراسات على:</p>
                            <ul>
                                <li>كيفية انتشار الحرائق في المباني الحديثة</li>
                                <li>تأثير المواد الجديدة على سلوك الحرائق</li>
                                <li>دور التهوية في تطور الحرائق</li>
                                <li>تأثير تغير المناخ على الحرائق</li>
                            </ul>
                            
                            <h6>3. تطوير معدات الإطفاء</h6>
                            <p>تشمل التطويرات:</p>
                            <ul>
                                <li>مضخات أكثر قوة وكفاءة</li>
                                <li>خراطيم أخف وأقوى</li>
                                <li>أقنعة تنفس محسنة</li>
                                <li>أدوات إنقاذ متطورة</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="معدات الإطفاء الحديثة" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">معدات الإطفاء المتطورة - تقنيات المستقبل</small>
                                </div>
                            </div>
                            
                            <h6>4. البحوث المستقبلية</h6>
                            <p>تركز على:</p>
                            <ul>
                                <li>تقنيات الإطفاء بالنانو</li>
                                <li>أنظمة الإطفاء بالطاقة الشمسية</li>
                                <li>الروبوتات في الإطفاء</li>
                                <li>الواقع الافتراضي في التدريب</li>
                            </ul>
                        `
                    }
                },
                {
                    id: 'fire-psychology',
                    title: 'علم نفس الإطفاء',
                    description: 'الجوانب النفسية في عمل رجال الإطفاء',
                    article: {
                        title: 'الصحة النفسية لرجال الإطفاء',
                        content: `
                            <div class="article-image mb-4">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center" 
                                     alt="علم نفس الإطفاء" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">الدعم النفسي لرجال الإطفاء - جلسات استشارية</small>
                                </div>
                            </div>
                            
                            <h5>التحديات النفسية في مهنة الإطفاء</h5>
                            <p>مهنة الإطفاء تتطلب قوة جسدية وعقلية. يتعرض رجال الإطفاء لضغوط نفسية كبيرة تتطلب فهماً وعناية خاصة.</p>
                            
                            <h6>1. مصادر الضغط النفسي</h6>
                            <p>تشمل المصادر الرئيسية:</p>
                            <ul>
                                <li><strong>المشاهد الصعبة:</strong> رؤية الإصابات والوفيات</li>
                                <li><strong>الخطر المستمر:</strong> التعرض للمخاطر في كل مهمة</li>
                                <li><strong>ساعات العمل الطويلة:</strong> العمل في نوبات متتالية</li>
                                <li><strong>المسؤولية الكبيرة:</strong> حماية الأرواح والممتلكات</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center" 
                                     alt="الضغط النفسي" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">التحديات النفسية في مهنة الإطفاء</small>
                                </div>
                            </div>
                            
                            <h6>2. تأثيرات الضغط النفسي</h6>
                            <p>يمكن أن تؤدي إلى:</p>
                            <ul>
                                <li>اضطراب ما بعد الصدمة (PTSD)</li>
                                <li>القلق والاكتئاب</li>
                                <li>مشاكل في النوم</li>
                                <li>صعوبات في العلاقات الشخصية</li>
                            </ul>
                            
                            <h6>3. استراتيجيات التعامل</h6>
                            <p>تشمل:</p>
                            <ul>
                                <li><strong>الدعم النفسي:</strong> جلسات استشارية منتظمة</li>
                                <li><strong>التدريب على المرونة:</strong> تقنيات التعامل مع الضغط</li>
                                <li><strong>الدعم الجماعي:</strong> مجموعات الدعم المتبادل</li>
                                <li><strong>الرعاية الصحية:</strong> متابعة طبية منتظمة</li>
                            </ul>
                            
                            <div class="article-image my-4">
                                <img src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=600&h=300&fit=crop&crop=center" 
                                     alt="استراتيجيات التعامل" class="img-fluid rounded shadow">
                                <div class="image-caption text-center mt-2">
                                    <small class="text-muted">مجموعات الدعم المتبادل - التعافي من الصدمات</small>
                                </div>
                            </div>
                            
                            <h6>4. التعافي من الصدمات</h6>
                            <p>يتطلب:</p>
                            <ul>
                                <li>الاعتراف بالمشكلة</li>
                                <li>طلب المساعدة المهنية</li>
                                <li>مشاركة التجارب مع الزملاء</li>
                                <li>ممارسة الأنشطة الإيجابية</li>
                            </ul>
                        `
                    }
                }
            ]
        }
    }
];

// Header scroll effect
function initHeaderScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initHeaderScrollEffect();
});

function initializeApp() {
    renderSections();
    setupSearch();
    setupMenuSearch();
    populateMenuSections();
    setupMenuEnhancements();
    setupBackToTop();
    setupSmoothScrolling();
}

// Render sections
function renderSections() {
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';

    sectionsData.forEach(section => {
        const sectionCard = createSectionCard(section);
        container.appendChild(sectionCard);
    });
}

// Create section card
function createSectionCard(section) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    col.innerHTML = `
        <div class="card section-card h-100" data-section-id="${section.id}">
            <div class="card-body">
                <div class="card-content" onclick="showSectionContent('${section.id}')" style="cursor: pointer;">
                    <div class="section-icon">
                        <i class="${section.icon}"></i>
                    </div>
                    <h5 class="card-title section-title">${section.title}</h5>
                    <p class="card-text section-description">${section.description}</p>
                </div>
                <a href="#" class="btn section-btn" onclick="event.preventDefault(); showSectionContent('${section.id}')">
                    عرض المحتوى
                </a>
            </div>
        </div>
    `;

    return col;
}

// Show section content
function showSectionContent(sectionId) {
    const section = sectionsData.find(s => s.id === sectionId);
    if (!section) return;

    // Create modal for section content
    const modalHtml = `
        <div class="modal fade" id="sectionModal" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header" style="background-color: ${section.color}; color: white;">
                        <h5 class="modal-title">
                            <i class="${section.icon} me-2"></i>
                            ${section.title}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-content">
                            <h6>الوصف:</h6>
                            <p>${section.content.description}</p>
                        </div>
                        
                        <div class="content-section">
                            <h6>المواضيع الفرعية:</h6>
                            <div class="row">
                                ${section.content.subtopics.map(subtopic => `
                                    <div class="col-md-6 col-lg-4 mb-3">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h6 class="card-title">${subtopic.title}</h6>
                                                <p class="card-text small">${subtopic.description}</p>
                                                <button class="btn btn-sm btn-outline-primary" onclick="showSubtopicContent('${sectionId}', '${subtopic.id}')">
                                                    عرض التفاصيل
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('sectionModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('sectionModal'));
    modal.show();
}

// Show subtopic content
function showSubtopicContent(sectionId, subtopicId) {
    const section = sectionsData.find(s => s.id === sectionId);
    if (!section) return;
    
    const subtopic = section.content.subtopics.find(st => st.id === subtopicId);
    if (!subtopic) return;

    // Check if this is an article or video content
    const isArticle = subtopic.article;
    
    let contentHtml = '';
    
    if (isArticle) {
        // Article content
        contentHtml = `
            <div class="text-content">
                <h6>الوصف:</h6>
                <p>${subtopic.description}</p>
            </div>

            <div class="content-section">
                <h6>المقال:</h6>
                <div class="article-content">
                    <h4 class="article-title">${subtopic.article.title}</h4>
                    <div class="article-body">
                        ${subtopic.article.content}
                    </div>
                </div>
            </div>
        `;
    } else {
        // Video content
        contentHtml = `
            <div class="text-content">
                <h6>الوصف:</h6>
                <p>${subtopic.description}</p>
            </div>

            <div class="content-section">
                <h6>مقاطع الفيديو التعليمية:</h6>
                <div class="video-grid">
                    ${subtopic.videos.map(video => `
                        <div class="video-item">
                            <div class="video-thumbnail">
                                <img src="${video.thumbnail}" alt="${video.title}">
                                <button class="video-play-btn" onclick="playVideo('${video.videoId}', '${video.title}')">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <h6>${video.title}</h6>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Create modal for subtopic content
    const modalHtml = `
        <div class="modal fade" id="subtopicModal" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header" style="background-color: ${section.color}; color: white;">
                        <h5 class="modal-title">
                            <i class="${section.icon} me-2"></i>
                            ${subtopic.title}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        ${contentHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing subtopic modal if any
    const existingSubtopicModal = document.getElementById('subtopicModal');
    if (existingSubtopicModal) {
        existingSubtopicModal.remove();
    }

    // Add subtopic modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show subtopic modal
    const subtopicModal = new bootstrap.Modal(document.getElementById('subtopicModal'));
    subtopicModal.show();
}

// Play video
function playVideo(videoId, title) {
    const modalHtml = `
        <div class="modal fade video-modal" id="videoModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-0">
                        <iframe src="https://www.youtube.com/embed/${videoId}" 
                                frameborder="0" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing video modal if any
    const existingVideoModal = document.getElementById('videoModal');
    if (existingVideoModal) {
        existingVideoModal.remove();
    }

    // Add video modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show video modal
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderSections();
        return;
    }

    const filteredSections = sectionsData.filter(section => {
        // Search in section title and description
        const sectionMatch = section.title.toLowerCase().includes(searchTerm) ||
                           section.description.toLowerCase().includes(searchTerm) ||
                           section.content.description.toLowerCase().includes(searchTerm);
        
        // Search in subtopics
        const subtopicMatch = section.content.subtopics.some(subtopic => 
            subtopic.title.toLowerCase().includes(searchTerm) ||
            subtopic.description.toLowerCase().includes(searchTerm) ||
            subtopic.videos.some(video => video.title.toLowerCase().includes(searchTerm))
        );
        
        return sectionMatch || subtopicMatch;
    });

    displaySearchResults(filteredSections, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const container = document.getElementById('sectionsContainer');
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <i class="fas fa-search fa-2x mb-3"></i>
                    <h5>لم يتم العثور على نتائج</h5>
                    <p>جرب البحث بكلمات مختلفة أو تحقق من الإملاء</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="col-12 mb-3">
            <h5>نتائج البحث عن: "${searchTerm}" (${results.length} نتيجة)</h5>
        </div>
    `;

    results.forEach(section => {
        const sectionCard = createSectionCard(section);
        container.appendChild(sectionCard);
    });
}

// Setup back to top button
function setupBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to highlight search terms
function highlightSearchTerm(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Setup menu search functionality
function setupMenuSearch() {
    const menuSearchInput = document.getElementById('menuSearchInput');
    const menuSearchBtn = document.getElementById('menuSearchBtn');

    if (menuSearchBtn) {
        menuSearchBtn.addEventListener('click', performMenuSearch);
    }
    
    if (menuSearchInput) {
        menuSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performMenuSearch();
            }
        });
    }
}

// Perform search from menu
function performMenuSearch() {
    const searchTerm = document.getElementById('menuSearchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Close menu and show all sections
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasMenu'));
        if (offcanvas) {
            offcanvas.hide();
        }
        renderSections();
        return;
    }

    // Close menu first
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasMenu'));
    if (offcanvas) {
        offcanvas.hide();
    }

    // Perform search
    setTimeout(() => {
        document.getElementById('searchInput').value = searchTerm;
        performSearch();
    }, 300);
}

// Populate menu sections
function populateMenuSections() {
    const sectionsMenuList = document.getElementById('sectionsMenuList');
    if (!sectionsMenuList) return;

    sectionsMenuList.innerHTML = '';

    sectionsData.forEach(section => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
        listItem.innerHTML = `
            <a href="#" class="text-decoration-none d-flex align-items-center justify-content-between" 
               onclick="showQuickAccess('${section.id}')" data-bs-dismiss="offcanvas">
                <div class="d-flex align-items-center">
                    <i class="${section.icon} me-2" style="color: ${section.color};"></i>
                    <span>${section.title}</span>
                </div>
                <small class="text-muted">${section.content.subtopics.length} موضوع</small>
            </a>
        `;
        
        sectionsMenuList.appendChild(listItem);
    });
}

// Show quick access to section
function showQuickAccess(sectionId) {
    showSectionContent(sectionId);
}

// Enhanced menu functionality
function setupMenuEnhancements() {
    // Auto-close menu when clicking outside
    document.addEventListener('click', function(e) {
        const offcanvas = document.getElementById('offcanvasMenu');
        const menuButton = document.querySelector('[data-bs-target="#offcanvasMenu"]');
        
        if (offcanvas && !offcanvas.contains(e.target) && !menuButton.contains(e.target)) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
    });

    // Add scroll to top when menu opens
    const offcanvasElement = document.getElementById('offcanvasMenu');
    if (offcanvasElement) {
        offcanvasElement.addEventListener('shown.bs.offcanvas', function() {
            // Scroll to top of menu content
            const menuBody = offcanvasElement.querySelector('.offcanvas-body');
            if (menuBody) {
                menuBody.scrollTop = 0;
            }
        });
    }
}
